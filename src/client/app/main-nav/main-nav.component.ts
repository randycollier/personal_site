import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router} from 'angular2/router';

@Component({
  moduleId: __moduleName,
  selector: 'main-nav',
  templateUrl: 'main-nav.component.html',
  styleUrls: ['main-nav.component.css'],
  directives: [ROUTER_DIRECTIVES]
})
export class MainNavComponent implements OnInit {

	constructor(public router: Router) {}	
	
	isActiveRoutes(routes) {
		return this.router.isRouteActive(this.router.generate(routes));
	}

  
  	ngOnInit() {}

}



