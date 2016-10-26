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



 ## Questions? Open a Issue!