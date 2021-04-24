import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  faHeart = faHeart;
  toggle: boolean = false;
  status = 'Enable';
  recipeList: Observable<any> | null = null;
  searchTerm: string | null = null;
  dietSelection: string[] | null = null;
  catagory: string | null = null;
  cuisine: string | null = null;

  constructor(private service: RecipesService) {}

  ngOnInit(): void {
    this.recipeList = this.service.searchRecipes(this.searchTerm, this.dietSelection, this.catagory, this.cuisine)
  }

  saveRecipe(recipeItem: any){
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Enable' : 'Disable';
    if (!recipeItem.favorite) {
      recipeItem.favorite = true;
      this.service.addRecipeBookListEvent(recipeItem);
    }
    else if (recipeItem.favorite === true){
      recipeItem.favorite = false;
      this.service.removeRecipeBookListEvent(recipeItem)
    }
  }
}
