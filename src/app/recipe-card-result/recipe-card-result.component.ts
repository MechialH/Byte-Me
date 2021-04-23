import { Component, OnInit, Input } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { RecipeCardResult } from '../recipe-card-result';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-card-result',
  templateUrl: './recipe-card-result.component.html',
  styleUrls: ['./recipe-card-result.component.css'],
})
export class RecipeCardResultComponent implements OnInit {
  @Input() recipeResults: RecipeCardResult | null = null;
  @Input() result = null;

  faHeart = faHeart;

  constructor(private service: RecipesService) {}

  ngOnInit(): void {
    this.service.addRecipe(this.result)
  }
}
