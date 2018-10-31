import { Component, OnInit } from '@angular/core';
import { RecipesService } from './recipes.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipesService],
})
export class RecipesComponent implements OnInit {
  selectedRecpie:Recipe;
  constructor(private recSe:RecipesService) { }

  ngOnInit()
  {
    this.recSe.recpieSelected.
    subscribe
    (
      (recpie:Recipe)=>{this.selectedRecpie=recpie}
    )
  }

}
