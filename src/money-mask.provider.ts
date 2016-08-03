export class MoneyMaskProvider {
 
	options = {
		allowNegative: false,
		precision: 2,
		thousands: '.',
		decimal: ',',
		prefix: 'R$ ',
		suffix: ''
	}

	constructor(options) {
		this.options = Object.assign({}, this.options, options);
	}

	get defaultMask() {
		var n = parseFloat("0") / Math.pow(10, this.options.precision);
		return (n.toFixed(this.options.precision)).replace(new RegExp("\\.", "g"), this.options.decimal);
	}

	clear(textValue) {

		let value = (textValue || "0");
		let isNegative = value.indexOf("-") !== -1;
		let decimalPart;



		value
			.split(/\D/)
			.reverse()
			.forEach(function (element, index) {
				if (element) {
					decimalPart = element;
					return false;
				}
			});

		value = value.replace(/\D/g, "");
		value = value.replace(new RegExp(decimalPart + "$"), "." + decimalPart);
		if (isNegative) {
			value = "-" + value;
		}
		return parseFloat(value);

	}

	applyMask(value) {

		var {allowNegative, precision, thousands, decimal} = this.options;

		var negative = (value.indexOf("-") > -1 && allowNegative) ? "-" : "",
			onlyNumbers = value.replace(/[^0-9]/g, ""),
			integerPart = onlyNumbers.slice(0, onlyNumbers.length - precision),
			newValue,
			decimalPart,
			leadingZeros;

		// trim 0
		integerPart = integerPart.replace(/^0*/g, "");

		// separador de milhar
		integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousands);
		if (integerPart === "") {
			integerPart = "0";
		}
		newValue = negative + integerPart;

		if (precision > 0) {
			decimalPart = onlyNumbers.slice(onlyNumbers.length - precision);
			leadingZeros = new Array((precision + 1) - decimalPart.length).join('0');
			newValue += decimal + leadingZeros + decimalPart;
		}
		return this.setSymbol(newValue);
	}


	apply(value) {

		if (this.options.precision > 0 && value.indexOf(this.options.decimal) < 0) {
			value += this.options.decimal + new Array(this.options.precision + 1).join('0');
		}
		return this.applyMask(value);
	}

	setSymbol(value) {

		var {prefix, suffix} = this.options;

		var operator = "";
		if (value.indexOf("-") > -1) {
			value = value.replace("-", "");
			operator = "-";
		}
		return operator + prefix + value + suffix;
	}

	changeSign(value) {
		var inputValue = value;
		if (this.options.allowNegative) {
			if (inputValue !== "" && inputValue.charAt(0) === "-") {
				return inputValue.replace("-", "");
			} else {
				return "-" + inputValue;
			}
		} else {
			return inputValue;
		}
	}


}