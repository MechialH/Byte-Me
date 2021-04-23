import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RecipeCardResult } from '../recipe-card-result';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-category-results',
  templateUrl: './category-results.component.html',
  styleUrls: ['./category-results.component.css'],
})
export class CategoryResultsComponent implements OnInit, OnDestroy {
  @Input() sampleResults: RecipeCardResult[] = [
    {
      glutenFree: true,
      dairyFree: true,
      vegetarian: true,
      vegan: true,
      keto: true,
      name: 'Yogurt Cheescake',
      time: '40 mins',
      mealType: 'DESSERT',
      favorite: true,
    },
  ];

  constructor(private service: RecipesService) {}

  ngOnInit(): void {}


  
}
