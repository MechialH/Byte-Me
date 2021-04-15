import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { RecipiesService} from '../recipes.service'
@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  recipes: Observable<any> | null = null;
  searchText: string = ''

  constructor(private service:RecipiesService) { }

  ngOnInit(): void {
  }

  searchByTerm(){
    this.recipes = this.service.searchRecipiesByTerm(this.searchText)
   
  }
}
