import { Component, OnInit } from '@angular/core';
import{ingrediant}from '../shere/ingrediant.model'
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingrediants: ingrediant[];
  constructor(private shopServ:ShoppingListService) { }

  ngOnInit() 
  {
    this.ingrediants=this.shopServ.getIngrediants();
  }
  
}
