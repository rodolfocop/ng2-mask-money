import {MoneyMaskProvider} from './money-mask.provider';
import {InputManager} from './input.manager';

export class MoneyInputService {

  public elementRef: any;
  lastValidValue = '';
  maskProvider: MoneyMaskProvider;
  inputManager: InputManager;

  triggerChange = (() => {
    return;
  });

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

  onchange = (val: any) => {
    return val;
  }

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

  set value(val) {
    this.rawValue = this.maskProvider.fromNumber(val);
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

  constructor(input: any, options: any, onchange: any) {
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

  onChange(handler: any) {
    this.triggerChange = handler || (() => {
        return;
      });
  }

  updateFieldValue(startPos: any) {
    let value = this.rawValue || '';
    const length = value.length;
    value = this.maskProvider.applyMask(value);
    this.inputManager.updateValueAndCursor(value, length, startPos);
  }

  changeSign() {
    this.rawValue = this.maskProvider.changeSign(this.rawValue);
  }

  removeSign() {
    this.rawValue = this.rawValue.replace('-', '');
  }

  processSpacebar(key: any) {
    const selection = this.inputSelection;
    let startPos = selection.start;
    let endPos = selection.end;
    const value = this.rawValue;

    // sem seleção
    if (startPos === endPos) {
      // espaço
      if (key === 8) {
        const lastNumber = value.split('').reverse().join('').search(/\d/);
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
    const value = this.rawValue;
    const empty = this.emptyValue;

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
    const {elementRef} = this;

    if (elementRef.setSelectionRange) {
      length = this.rawValue.length;
      elementRef.setSelectionRange(length, length);
    } else {
      const value = this.rawValue;
      setTimeout(() => {
        this.rawValue = value;
      }, 1);
    }
  }

  saveFocusValue() {
    this.lastValidValue = this.rawValue;

    this.rawValue = this.maskProvider.apply(this.rawValue);
    const input = this.elementRef;

    if (input.createTextRange) {
      const textRange = input.createTextRange();
      textRange.collapse(false); // set the cursor at the end of the input
      textRange.select();
    }
  }

  waitAndFormat() {
    setTimeout(() => {
      this.maskProvider.apply(this.rawValue);
    }, 1);
  }

  addNumber(key: any) {
    const keyPressedChar = String.fromCharCode(key);
    const selection = this.inputSelection;
    const startPos = selection.start;
    const endPos = selection.end;
    const value = this.rawValue;
    this.rawValue = value.substring(0, startPos) + keyPressedChar + value.substring(endPos, value.length);
    this.updateFieldValue(startPos + 1);
  }

}
