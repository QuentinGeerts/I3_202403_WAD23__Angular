import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeFr);
registerLocaleData(localeEs);


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
