import { Recipe } from "./recipe.model";
import { EventEmitter } from "@angular/core";

export class RecipesService
 {
     recpieSelected=new EventEmitter<Recipe>(); 
    private recipes:Recipe[]=[
        new Recipe('first Item','descrption path',
        'https://www.maxpixel.net/static/photo/1x/Recipes-Kitchen-Cookbook-Old-1937-Preparation-982661.jpg'),
        new Recipe('Second Item','descrption path',
        'https://www.maxpixel.net/static/photo/1x/Recipes-Kitchen-Cookbook-Old-1937-Preparation-982661.jpg')
      ];

        getRecipesList()
        {
            return this.recipes.slice();
        }
}