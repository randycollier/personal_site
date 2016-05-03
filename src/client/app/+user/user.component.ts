import {Component, OnInit} 	from 'angular2/core';
import {HTTP_PROVIDERS} 	from 'angular2/http';
import {provide} 	from 'angular2/core';

import {User} 				from './user';
import {UserService} 		from './user.service';



@Component({
  moduleId: __moduleName,
  selector: 'user',
  templateUrl: 'user.component.html',
  styleUrls: ['user.component.css'],
  providers: [
  	HTTP_PROVIDERS,
  	UserService
  ]
})
export class UserComponent implements OnInit {

  constructor(private _userService: UserService) {}
  errorMessage: string;
  users:User[];

  ngOnInit() {
  	  this.getUsers();
  }

  getUsers(){
  	this._userService.getUsers()
  					 .subscribe(
  					 	users => this.updateUsers(users),
  					 	error => this.errorMessage = <any>error
  					 )

  }

  updateUsers(users){
    console.log(users)
    console.log('updateusers')
    this.users= users;
  }

}






/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/