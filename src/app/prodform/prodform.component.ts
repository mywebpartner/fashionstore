import { Component } from '@angular/core';
import {CategoriesDataService} from '../services/categories-data.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-prodform',
  templateUrl: './prodform.component.html',
  styleUrls: ['./prodform.component.css']
})
export class ProdformComponent {
  title = 'Product Form';
  products:any;
  constructor(private prodData: CategoriesDataService)
  {
    prodData.categories().subscribe((data)=>{
      this.products=data
  });
}
  getProdData(data:NgForm){
    console.warn(data);
    this.prodData.saveCat(data).subscribe((result)=>{
      console.warn(result)
    })
  }



}

