export class InputManager {

  constructor(private input: any, private options: any) {
  }

  get rawValue() {
    return this.input && this.input.value;
  }

  set rawValue(value) {
    if (this.input) {
      this.input.value = value;
    }
  }

  get canInputMoreNumbers() {

    const input = this.input;
    const maxlength = input.maxLength;

    const haventReachedMaxLength = !(this.rawValue.length >= maxlength && maxlength >= 0);
    const selection = this.inputSelection;
    const start = selection.start;
    const end = selection.end;
    const haveNumberSelected = !!(selection.start !== selection.end && input.value.substring(start, end).match(/\d/));
    const startWithZero = (input.value.substring(0, 1) === '0');

    return haventReachedMaxLength || haveNumberSelected || startWithZero;
  }

  get inputSelection() {
    const el = this.input;
    let start = 0;
    let end = 0;


    if (typeof el.selectionStart === 'number' && typeof el.selectionEnd === 'number') {
      start = el.selectionStart;
      end = el.selectionEnd;
    } else {
      const range = (<any>document).selection.createRange(); //

      if (range && range.parentElement() === el) {
        const len = el.value.length;
        const normalizedValue = el.value.replace(/\r\n/g, '\n');

        // Create a working TextRange that lives only in the input
        const textInputRange = el.createTextRange();
        textInputRange.moveToBookmark(range.getBookmark());

        // Check if the start and end of the selection are at the very end
        // of the input, since moveStart/moveEnd doesn't return what we want
        // in those cases
        const endRange = el.createTextRange();
        endRange.collapse(false);

        if (textInputRange.compareEndPoints('StartToEnd', endRange) > -1) {
          start = end = len;
        } else {
          start = -textInputRange.moveStart('character', -len);
          start += normalizedValue.slice(0, start).split('\n').length - 1;

          if (textInputRange.compareEndPoints('EndToEnd', endRange) > -1) {
            end = len;
          } else {
            end = -textInputRange.moveEnd('character', -len);
            end += normalizedValue.slice(0, end).split('\n').length - 1;
          }
        }
      }
    }

    return {
      start: start,
      end: end
    };
  }

  updateValueAndCursor(value: any, oldLen: number, startPos: number) {
    const length = oldLen;
    this.rawValue = value;
    const newLength = value.length;
    startPos = startPos - (length - newLength);
    this.setCursorAt(startPos);
  }

  setCursorAt(pos: number) {
    const elem = this.input;
    if (elem.setSelectionRange) {
      elem.focus();
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      const range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  }
}
