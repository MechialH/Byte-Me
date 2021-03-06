import { Component, OnInit } from '@angular/core';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { RecipesService } from '../recipes.service';
@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css'],
})
export class RecipeBookComponent implements OnInit {
  faHeart = faHeart;
  faTrash = faTrash;
  recipeList: any[] | null = [];
  recipe: any;
  constructor(private service: RecipesService) {}
  ngOnInit(): void {
    this.recipeList = this.service.getRecipeBookList();
    console.log('oninit recipe list');
    console.log(this.recipeList);
  }
  addRecipe(recipe) {
    this.service.addRecipeBookListEvent(recipe);
  }
  removeRecipe(recipe) {
    this.service.removeRecipeBookListEvent(recipe);
  }
}
