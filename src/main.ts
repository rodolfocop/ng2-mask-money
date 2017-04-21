import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

import {environment} from './environments/environment';
import {MoneyMaskModule} from './mask/money-mask.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(MoneyMaskModule);
