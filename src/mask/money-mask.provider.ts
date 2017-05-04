export class MoneyMaskProvider {

  options = {
    allowNegative: false,
    precision: 2,
    thousands: ',',
    decimal: '.',
    prefix: '$ ',
    suffix: ''
  };

  constructor(options: any) {
    this.options = Object.assign({}, this.options, options);
  }

  get defaultMask() {
    const n = parseFloat('0') / Math.pow(10, this.options.precision);
    return (n.toFixed(this.options.precision)).replace(new RegExp('\\.', 'g'), this.options.decimal);
  }

  fromNumber(value: any) {
    const {allowNegative, precision, thousands, decimal, prefix, suffix} = this.options;

    value = (value || 0);
    if (!allowNegative) {
      value = Math.abs(value);
    }

    const text = (+value || 0).toFixed(precision);

    const [integer, dec] = text.split('.');

    const integerPart = integer.replace(/\B(?=(\d{3})+(?!\d))/g, thousands);
    const decimalPart = precision <= 0 ? '' : `${decimal}${dec}`;

    return `${prefix}${integerPart}${decimalPart}${suffix}`;

  }

  clear(textValue: string) {
    let value = (textValue || '0');
    let isNegative = value.indexOf('-') !== -1;
    
    value = Number(value.replace(/[^0-9\.]+/g,"")).toString();

    if (isNegative) {
      value = '-' + value;
    }
    return parseFloat(value);

  }

  applyMask(value: string) {

    const {allowNegative, precision, thousands, decimal} = this.options;

    const negative = (value.indexOf('-') > -1 && allowNegative) ? '-' : '',
      onlyNumbers = value.replace(/[^0-9]/g, '');

    let integerPart = onlyNumbers.slice(0, onlyNumbers.length - precision),
      newValue: any,
      decimalPart: any,
      leadingZeros: any;

    integerPart = integerPart.replace(/^0*/g, '');

    // separador de milhar
    integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousands);
    if (integerPart === '') {
      integerPart = '0';
    }
    newValue = negative + integerPart;

    if (precision > 0) {
      decimalPart = onlyNumbers.slice(onlyNumbers.length - precision);
      leadingZeros = new Array((precision + 1) - decimalPart.length).join('0');
      newValue += decimal + leadingZeros + decimalPart;
    }
    return this.setSymbol(newValue);
  }

  apply(value: any) {

    if (this.options.precision > 0 && value.indexOf(this.options.decimal) < 0) {
      value += this.options.decimal + new Array(this.options.precision + 1).join('0');
    }
    return this.applyMask(value);
  }

  setSymbol(value: any) {

    const {prefix, suffix} = this.options;

    let operator = '';
    if (value.indexOf('-') > -1) {
      value = value.replace('-', '');
      operator = '-';
    }
    return operator + prefix + value + suffix;
  }

  changeSign(value: any) {
    const inputValue = value;
    if (this.options.allowNegative) {
      if (inputValue !== '' && inputValue.charAt(0) === '-') {
        return inputValue.replace('-', '');
      } else {
        return '-' + inputValue;
      }
    } else {
      return inputValue;
    }
  }
}
