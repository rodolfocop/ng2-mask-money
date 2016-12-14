import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MoneyMaskDirective} from './money-mask.directive';

@NgModule({
  declarations: [
    MoneyMaskDirective
  ],
  exports: [
    MoneyMaskDirective
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MoneyMaskModule { }
