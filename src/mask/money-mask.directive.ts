import {AfterViewInit, Directive, ElementRef, EventEmitter, HostListener, Input, OnChanges, Optional, Output} from '@angular/core';
import {NgModel} from '@angular/forms';
import {MoneyInputEventHandler} from './money-input-event.handler';

@Directive({
  selector: '[appMoneyMask]'
})
export class MoneyMaskDirective implements AfterViewInit, OnChanges {

  @Output('moneyModelChange')
  moneyModelChange: EventEmitter<number> = new EventEmitter<number>(true);

  @Input('moneyModel')
  moneyModel: number;

  @Input('moneyMaskOptions')
  moneyMaskOptions: any = {};

  inputEventHandler: MoneyInputEventHandler;
  elementRef: HTMLInputElement;
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

  constructor(@Optional() private ngModel: NgModel, public el: ElementRef) {
  }

  ngOnChanges(changes: any) {
    // console.log(changes);
    if ('moneyModel' in changes) {
      const value = (+changes.moneyModel.currentValue || 0).toString();
      setTimeout(() => this.inputEventHandler.setValue(value), 100);
    }
  }

  ngAfterViewInit() {

    this.elementRef = this.el.nativeElement as HTMLInputElement;
    this.elementRef.style.textAlign = 'right';

    const options = Object.assign({}, this.options, this.moneyMaskOptions);
    this.inputEventHandler = new MoneyInputEventHandler(this.elementRef, options, v => {
      if (this.ngModel) {
        this.elementRef.dispatchEvent(new Event('input', {'bubbles': true, 'cancelable': false}));
      }
      this.moneyModelChange.emit(this.inputEventHandler.inputService.value);
    });
  }


  @HostListener('keypress', ['$event'])
  handleKeypress(e: any) {
    this.inputEventHandler.handleKeypress(e);
  }

  @HostListener('keydown', ['$event'])
  handleKeydown(e: any) {
    this.inputEventHandler.handleKeydown(e);
  }

  @HostListener('blur', ['$event'])
  handleBlur(e: any) {
    this.inputEventHandler.handleBlur(e);
  }

  @HostListener('focus', ['$event'])
  handleFocus(e: any) {
    this.inputEventHandler.handleFocus(e);
  }

  @HostListener('click', ['$event'])
  handleClick(e: any) {
    this.inputEventHandler.handleClick(e);
  }

}
