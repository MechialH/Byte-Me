import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ExploreComponent } from './explore/explore.component';
import { CatagoriesComponent } from './catagories/catagories.component';
import { ResultsComponent } from './results/results.component';
import { RecipeViewComponent } from './recipe-view/recipe-view.component';
import { IngredientsComponent } from './ingredients/ingredients.component';
import { DirectionsComponent } from './directions/directions.component';
import { NotesComponent } from './notes/notes.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { ConversionsComponent } from './conversions/conversions.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { FavRecipeCardComponent } from './fav-recipe-card/fav-recipe-card.component';
import { DietaryFilterComponent } from './dietary-filter/dietary-filter.component';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { LocationFilterComponent } from './location-filter/location-filter.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainLayoutComponent,
    ExploreComponent,
    CatagoriesComponent,
    ResultsComponent,
    RecipeViewComponent,
    IngredientsComponent,
    DirectionsComponent,
    NotesComponent,
    FavoritesComponent,
    ConversionsComponent,
    ShoppingListComponent,
    RecipeBookComponent,
    FavRecipeCardComponent,
    DietaryFilterComponent,
    CategoryFilterComponent,
    LocationFilterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
