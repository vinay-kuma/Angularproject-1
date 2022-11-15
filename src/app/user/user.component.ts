// import { Component } from "@angular/core";

// @Component({
//   template: `<button [ngClass]="{'primary': isPrimary}"></button>`,
//   style:[
//     `button{
//       background-color: white;
//     }`,
//     `.primary{
//       background-color: var(--primary-color);
//     }`
//   ]
// })
// class UserComponent{
//   isPrimary:boolean =true
// }
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../users/User';

@Component({
  selector: 'app-user',
 templateUrl: './user.component.html',
 styleUrls: ['./user.component.css']
})
export class UserComponent  {
  @Input() user!: User;
  @Output() userSelected = new EventEmitter<User>();

  constructor() { }
   if (onUserSelect = true) {
     return 1;
    
  }
   

  onUserSelect() {
    this.userSelected.emit(this.user);
  }
}

/* import { Component,  EventEmitter,  Input, OnInit, Output } from '@angular/core';
import { User } from '../users/User';

@Component({
  //selector: 'app-user',
 template: `<button [ngClass]="{'primary': isPrimary"></button>`,
 style: [
  `button {
    background-color: white;
  }`,
  `.sec { 
    background-color: var(red);
  }`
 ]
//  styleUrls: ['./user.component.css']
})
export class UserComponent  {
  @Input() user!: User;
  @Output() userSelected = new EventEmitter<User>();
  // btnprimary = document.querySelector('#primary');

  constructor() { }
  // if (onclick= true) {
  //   return 1;
    
  // }
   

  // btnprimary.addEventListener('click', () => btnprimary.Style.backgroundColor='gtreen');
  onUserSelect () {
    this.userSelected.emit(this.user);
  }
} */
