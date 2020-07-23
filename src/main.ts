import './polyfills';

import Amplify, { Auth } from 'aws-amplify';
import amplify from './aws-exports';
Amplify.configure(amplify);

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);