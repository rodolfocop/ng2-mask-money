# ng2-money-mask Directive

Directive for money input mask in angular2 (compatible with `^2.0.0`)

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