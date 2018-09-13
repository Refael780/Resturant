import { Component, OnInit } from '@angular/core';
import{ingrediant}from '../shere/ingrediant.model'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingrediants:ingrediant[]=[
  new ingrediant('apple','5'),
  new ingrediant('cheeze','5')
];
  constructor() { }

  ngOnInit() {
  }

}
