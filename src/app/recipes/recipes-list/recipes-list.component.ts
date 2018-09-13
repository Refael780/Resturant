import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() sendRec=new EventEmitter<Recipe>();
  recipes:Recipe[]=[
    new Recipe('first Item','descrption path',
    'https://www.maxpixel.net/static/photo/1x/Recipes-Kitchen-Cookbook-Old-1937-Preparation-982661.jpg')
  ];
  PassData(elemntofRec:Recipe)
  {
  this.sendRec.emit(elemntofRec)
  }
  constructor() { }

  ngOnInit() {
  }

}
