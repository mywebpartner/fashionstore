import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CategoriesDataService {
  url = "http://localhost:5054/api/FashionStoreApi/GetCategories"
  url2 = "http://localhost:5054/api/FashionStoreApi/GetProducts"
  constructor(private http:HttpClient) {}
  categories()
  {
    return this.http.get(this.url);
  }
  saveCat(data:any){
    return this.http.post(this.url,data);
    
  }

  products()
  {
    return this.http.get(this.url2);
  }
  saveProd(data:any){
    return this.http.post(this.url2,data);
    
  }



    
  
  
}
