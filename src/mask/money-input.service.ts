import { MoneyMaskProvider } from './money-mask.provider';
import { InputManager } from './input.manager';

export class MoneyInputService {

    lastValidValue: string = '';
    maskProvider: MoneyMaskProvider;
    inputManager: InputManager;

    triggerChange = (() => {
        return;
    });

    elementRef: any;
    options = {
        allowNegative: true,
        precision: 2,
        prefix: 'R$ ',
        suffix: '',
        thousands: '.',
        decimal: ',',
        allowZero: true,
        affixesStay: true
    };

    onchange = (val) => {
        return val;
    };

    get rawValue() {
        return this.elementRef && this.elementRef.value;
    }

    set rawValue(value) {
        if (this.elementRef) {
            this.elementRef.value = value;
            if (this.onchange) {
                setTimeout(() => this.onchange(this.rawValue), 1);
            }
        }
    }

    get value() {
        return this.maskProvider.clear(this.rawValue);
    }

    set value(val){

        var rawValue = this.maskProvider.fromNumber(val);
        this.rawValue = rawValue;
    }


    get canInputMoreNumbers() {
        return this.inputManager.canInputMoreNumbers;
    }

    get inputSelection() {
        return this.inputManager.inputSelection;
    }

    get emptyValue() {
        return this.maskProvider.setSymbol(this.maskProvider.defaultMask);
    }

    constructor(input, options, onchange) {
        this.elementRef = input;
        this.options = Object.assign({}, this.options, options);
        this.onchange = onchange;

        this.maskProvider = new MoneyMaskProvider(this.options);
        this.inputManager = new InputManager(input, this.options);
    }

    init() {
        this.elementRef.style.textAlign = 'right';
        this.updateFieldValue(0);
    }

    onChange(handler) {
        this.triggerChange = handler || (() => {
            return;
        });
    }

    updateFieldValue(startPos) {
        let value = this.rawValue || '';
        let length = value.length;
        value = this.maskProvider.applyMask(value);
        this.inputManager.updateValueAndCursor(value, length, startPos);
    }

    changeSign() {
        this.rawValue = this.maskProvider.changeSign(this.rawValue);
    }

    removeSign() {
        this.rawValue = this.rawValue.replace('-', '');
    }

    processSpacebar(key) {
        let selection = this.inputSelection;
        let startPos = selection.start;
        let endPos = selection.end;
        let value = this.rawValue;

        // sem seleção
        if (startPos === endPos) {
            // espaço
            if (key === 8) {
                let lastNumber = value.split('').reverse().join('').search(/\d/);
                startPos = value.length - lastNumber - 1;
                endPos = startPos + 1;
            } else {
                endPos += 1;
            }
        }

        this.rawValue = value.substring(0, startPos) + value.substring(endPos, value.length);
        this.updateFieldValue(startPos);
    }

    reformatField() {
        let value = this.rawValue;
        let empty = this.emptyValue;

        if (value === '' || value === empty) {
            if (!this.options.allowZero) {
                this.rawValue = '';
            } else if (!this.options.affixesStay) {
                this.rawValue = this.maskProvider.defaultMask;
            } else {
                this.rawValue = empty;
            }
        } else {
            if (!this.options.affixesStay) {
                this.rawValue = this.rawValue.replace(this.options.prefix, '').replace(this.options.suffix, '');
            }
        }

        if (this.rawValue !== this.lastValidValue) {
            this.triggerChange();
        }
    }

    resetSelection() {
        var {elementRef} = this;

        if (elementRef.setSelectionRange) {
            length = this.rawValue.length;
            elementRef.setSelectionRange(length, length);
        } else {
            var value = this.rawValue;
            setTimeout(() => {
                this.rawValue = value;
            }, 1);
        }
    }

    saveFocusValue() {
        this.lastValidValue = this.rawValue;

        this.rawValue = this.maskProvider.apply(this.rawValue);
        var input = this.elementRef;

        if (input.createTextRange) {
            let textRange = input.createTextRange();
            textRange.collapse(false); // set the cursor at the end of the input
            textRange.select();
        }
    }

    waitAndFormat() {
        setTimeout(() => {
            this.maskProvider.apply(this.rawValue);
        }, 1);
    }

    addNumber(key) {
        let keyPressedChar = String.fromCharCode(key);
        let selection = this.inputSelection;
        let startPos = selection.start;
        let endPos = selection.end;
        let value = this.rawValue;
        this.rawValue = value.substring(0, startPos) + keyPressedChar + value.substring(endPos, value.length);
        this.updateFieldValue(startPos + 1);
    }

}
