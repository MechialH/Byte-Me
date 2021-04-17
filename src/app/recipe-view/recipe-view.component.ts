import { Component, Input, OnInit } from '@angular/core';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { RecipeCardResult } from '../recipe-card-result';
import { RecipeViewDirections } from '../recipe-view-directions';
import { RecipeViewIngredients } from '../recipe-view-ingredients';

@Component({
  selector: 'app-recipe-view',
  templateUrl: './recipe-view.component.html',
  styleUrls: ['./recipe-view.component.css'],
})
export class RecipeViewComponent implements OnInit {
  faClock = faClock;
  recipeTiming = [
    {
      type: 'Prep Time',
      amount: '10',
    },
    {
      type: 'Cook',
      amount: '30',
    },
    {
      type: 'Calories',
      amount: '540',
    },
  ];

  sampleResults: RecipeCardResult[] = [
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
  sampleIngredientList: RecipeViewIngredients[] = [
    {
      measurement: '1/4 Cup',
      ingredient: 'Flour',
    },
    {
      measurement: '1/2 Cup',
      ingredient: 'Milk',
    },
    {
      measurement: '2 Cups',
      ingredient: 'Plain Flour',
    },
    {
      measurement: '1/4 Cup',
      ingredient: 'Caster Sugar',
    },
  ];

  sampleDirection: RecipeViewDirections[] = [
    {
      direction: 'Fold in the Cheese',
    },
    {
      direction: 'David, fold in the Cheese',
    },
    {
      direction: 'Just fold in the Cheese, David',
    },
    {
      direction: 'DAVID!',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
