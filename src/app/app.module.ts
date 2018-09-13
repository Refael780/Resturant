import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import{HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipesDetailComponent } from './Recipes/recipes-detail/recipes-detail.component';
import { HeaderComponent } from './header/header.component';
import{RecipesListComponent} from './recipes/recipes-list/recipes-list.component'
import{RecipesItemComponent} from './recipes/recipes-list/recipes-item/recipes-item.component';
import{ShoppingEditComponent}from './shopping-list/shopping-edit/shopping-edit.component';
import {ShoppingListComponent } from './shopping-list/shopping-list.component'
@NgModule({
  declarations: [
    AppComponent,
    RecipesComponent,
    RecipesDetailComponent,
    HeaderComponent,
    RecipesListComponent,
    RecipesItemComponent,
    ShoppingEditComponent,
    ShoppingListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
