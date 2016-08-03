import {HostListener, Input, Output, Directive, EventEmitter, ElementRef, Renderer, OnInit, AfterViewInit} from '@angular/core';
import {DefaultValueAccessor, NG_VALIDATORS} from '@angular/forms';
import {MoneyInputEventHandler} from './money-input-event.handler';

@Directive({
	selector: "[money]"
})
export class MoneyDirective extends DefaultValueAccessor implements AfterViewInit {
	// TODO: Este é um hack que permite usar DefaultValueAccessor como parent
	// can be removed when https://github.com/angular/angular/issues/9146 is fixed
	static decorators = null;
	value: any;


	@Output()
	ngModelChange: EventEmitter<any> = new EventEmitter(false);

	@Output()
	valueChange: EventEmitter<number> = new EventEmitter(true);

	inputEventHandler: MoneyInputEventHandler;


	constructor(private renderer: Renderer, public el: ElementRef ) {
		super(renderer, el);
	}

	ngAfterViewInit() {
		this.elementRef = this.el.nativeElement as HTMLInputElement;
		this.elementRef.style.textAlign = 'right';
 
		const options = Object.assign({}, this.options, this.inputOptions);
		this.inputEventHandler = new MoneyInputEventHandler(this.elementRef, options, v => {
			
			this.ngModelChange.emit(this.inputEventHandler.inputService.rawValue);
			this.valueChange.emit(this.inputEventHandler.inputService.value);
		});
	}

	elementRef: HTMLInputElement;

	@Input('money')
	inputOptions: any = {};

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

	@HostListener('keypress', ['$event'])
	handleKeypress(e) {
		this.inputEventHandler.handleKeypress(e);
	}

	@HostListener('keydown', ['$event'])
	handleKeydown(e) {
		this.inputEventHandler.handleKeydown(e);
	}
	@HostListener('blur', ['$event'])
	handleBlur(e) {
		this.inputEventHandler.handleBlur(e);
	}
	@HostListener('focus', ['$event'])
	handleFocus(e) {
		this.inputEventHandler.handleFocus(e);
	}
	@HostListener('click', ['$event'])
	handleClick(e) {
		this.inputEventHandler.handleClick(e);
	}






}
