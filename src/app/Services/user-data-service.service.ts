import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserDataServiceService {
  url = 'http://localhost:5054/api/FashionStoreApi/PostUser';
  constructor(private http:HttpClient) { }

  saveUsers(data:any){
    return this.http.post(this.url,data);
  }
}
