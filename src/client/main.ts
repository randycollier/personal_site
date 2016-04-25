import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {environment} from './app/environment';
import {BlogNgApp} from './app/blog-ng';

if (environment.production) {
  enableProdMode();
}

bootstrap(BlogNgApp);
