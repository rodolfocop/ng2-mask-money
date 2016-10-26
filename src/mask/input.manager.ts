export class InputManager {

  constructor(private input:HTMLInputElement, private options:any) {
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

    let input = this.input;
    let maxlength = input.maxLength;

    var haventReachedMaxLength = !(this.rawValue.length >= maxlength && maxlength >= 0);
    let selection = this.inputSelection;
    let start = selection.start;
    let end = selection.end;
    let haveNumberSelected = (selection.start !== selection.end && input.value.substring(start, end).match(/\d/)) ? true : false;
    let startWithZero = (input.value.substring(0, 1) === '0');

    return haventReachedMaxLength || haveNumberSelected || startWithZero;
  }

  get inputSelection() {
    var el = this.input;
    let start = 0;
    let end = 0;


    if (typeof el.selectionStart === 'number' && typeof el.selectionEnd === 'number') {
      start = el.selectionStart;
      end = el.selectionEnd;
    } else {
      let range = (<any>document).selection.createRange(); //

      if (range && range.parentElement() === el) {
        let len = el.value.length;
        let normalizedValue = el.value.replace(/\r\n/g, '\n');

        // Create a working TextRange that lives only in the input
        let textInputRange = el.createTextRange();
        textInputRange.moveToBookmark(range.getBookmark());

        // Check if the start and end of the selection are at the very end
        // of the input, since moveStart/moveEnd doesn't return what we want
        // in those cases
        let endRange = el.createTextRange();
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

  updateValueAndCursor(value, oldLen, startPos) {
    let length = oldLen;
    this.rawValue = value;
    let newLength = value.length;
    startPos = startPos - (length - newLength);
    this.setCursorAt(startPos);
  }

  setCursorAt(pos) {
    let elem = this.input;
    if (elem.setSelectionRange) {
      elem.focus();
      elem.setSelectionRange(pos, pos);
    } else if (elem.createTextRange) {
      var range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd('character', pos);
      range.moveStart('character', pos);
      range.select();
    }
  }
}
