import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {disableDeprecatedForms, provideForms} from '@angular/forms';

import { AppModule } from './app/app.module';

if (process.env.ENV === 'build') {
  enableProdMode();
}

platformBrowserDynamic()
  .bootstrapModule(AppModule, [
    disableDeprecatedForms(),
    provideForms()
  ]);
