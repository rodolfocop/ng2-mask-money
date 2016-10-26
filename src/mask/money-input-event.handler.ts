import { MoneyInputService } from './money-input.service';

export class MoneyInputEventHandler {

    inputService: MoneyInputService;

    constructor(private input: HTMLInputElement, options: any, onchange) {
        this.inputService = new MoneyInputService(input, options, onchange);
    }

    setValue(value){
        this.inputService.value = value;
    }

    handleKeypress(e) {
        const {inputService} = this;
        let key = e.which || e.charCode || e.keyCode;

        if (key === undefined) {
            return false;
        }

        if (key < 48 || key > 57) {
            // -(minus) key
            if (key === 45) {
                inputService.changeSign();
                return false;
                // +(plus) key
            } else if (key === 43) {
                inputService.removeSign();
                return false;
                // enter key or tab key
            } else if (key === 13 || key === 9) {
                return true;
            } else { // any other key with keycode less than 48 and greater than 57
                e.preventDefault();
                return true;
            }
        } else if (!inputService.canInputMoreNumbers) {
            return false;
        } else {
            e.preventDefault();
            inputService.addNumber(key);
            return false;
        }

    }

    handleKeydown(e) {

        const {inputService} = this;


        let key = e.which || e.charCode || e.keyCode;

        if (key === undefined) {
            return false;
        }
        /*
          let selection = inputService.inputSelection;
          let startPos = selection.start;
          let endPos = selection.end;
        */

        //espaço ou delete
        if (key === 8 || key === 46 || key === 63272) {
            e.preventDefault();

            inputService.processSpacebar(key);

            return false;
        } else if (key === 9) { // tab
            return true;
        } else { // outros
            return true;
        }
    }

    handleBlur(e) {
        this.inputService.reformatField();
    }

    handleClick(e) {
        this.inputService.resetSelection();
    }

    handleFocus(e) {
        this.inputService.saveFocusValue();
    }

    handleCutPastEvent(e) {
        this.inputService.waitAndFormat();
    }

}
