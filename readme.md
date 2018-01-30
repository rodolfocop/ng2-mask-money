# ng2-money-mask Directive

A very simple currency mask directive for Angular. 
You should use the version 4.x.x for Angular 4.x.x applications and the version 5.x.x for Angular 5.x.x applications.

Note: This component is NOT ready to AoC (Ahead-of-Time) compilation.


## Getting Started

### Installing and Importing

Install the package by command:

```sh
    npm install ng2-money-mask --save
```

Import the module

```ts
import {MoneyMaskModule} from 'ng2-money-mask';

@NgModule({
    declarations: [...],
    imports: [
        //... you others modules
        MoneyMaskModule
    ],
    providers: [...]
})
export class AppModule {}


```


### Using 

```html
    <input [(ngModel)]="moneyText" [(moneyModel)]="moneyValue" mask-money />
```

 * `ngModel` will get/set the value with text **(example: `'$ 1,234.56'`)** ;
 * `moneyModel` will get/set the number value **(example: `1234.56`)**; 


### Options 

You can set options...

```html
    <!-- example for pt-BR money -->
    <input [(ngModel)]="moneyText" [(moneyModel)]="moneyValue" [money-mask-options]="{ prefix: 'R$ ', thousands: '.', decimal: ',' }" mask-money />
```  

Available options: 

 * `allowNegative` - If `true` can input negative values.  (default: `false`)
 * `precision` - Number of decimal places (default: `2`)
 * `thousands` - Separator of thousands (default: `','`)
 * `decimal` -  Separator of decimals (default: `'.'`)
 * `prefix` - Money preffix (is included in ngModel) (default: `'$ '`)
 * `suffix` - Money suffix (is included in ngModel) (default: `''`)
  


 ## Questions? Open a Issue!
