import {Component, AfterViewInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from 'angular2/router';
import {UserComponent} from './+user';
import {MainNavComponent} from './main-nav/main-nav.component';
import {IndexComponent} from './+index';

import * as moment_ from 'moment';
const moment: moment.MomentStatic = (<any>moment_)['default'] || moment_;

@Component({
  moduleId: __moduleName,
  selector: 'blog-ng-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'blog-ng.html',
  //styleUrls: ['blog-ng.css'],
  directives: [ROUTER_DIRECTIVES, MainNavComponent],
  pipes: []
})
@RouteConfig([
  {path: '/', name: 'Index', component: IndexComponent, useAsDefault: true},
  {path: '/user', name: 'User', component: UserComponent},
])


export class BlogNgApp implements  AfterViewInit {
  // moment:moment.MomentStatic;
  today:string;
  constructor(){
  this.today = moment().format('dddd');


}

 ngAfterViewInit() {
    // viewChild is set after the view has been initialized
    // this._logIt('AfterViewInit');
    // this._doSomething();
    
  }

  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
