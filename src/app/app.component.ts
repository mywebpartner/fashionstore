import { Component } from '@angular/core';
import {CategoriesDataService} from './services/categories-data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Category Form';
  categories:any;
  constructor(private categoryData: CategoriesDataService)
  {
    categoryData.categories().subscribe((data)=>{
      this.categories=data
  });
  
  }
  getCatData(data:NgForm){
    console.warn(data);
    this.categoryData.saveCat(data).subscribe((result)=>{
      console.warn(result)
    })
  }

}