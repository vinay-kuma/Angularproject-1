import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent {
title: string = 'User-Names';
data:Array<any>
People:any;

  constructor() { 
    this.data=[
    { FirstName: 'Vinay', LastName: 'Vin', Age: '22'},
    { FirstName: 'Chandra', LastName: 'Chan', Age: '32'},
    { FirstName: 'Syamala', LastName: 'Sya', Age: '28'},
    { FirstName: 'Bose', LastName: 'booo', Age: '42'},
    { FirstName: 'Vaziha', LastName: 'vaz', Age: '20'}
  ];

  
  }
}
function clickEvent() {
  throw new Error('Function not implemented.');
}

