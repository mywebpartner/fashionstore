import { Component } from '@angular/core';
import { UserDataServiceService } from 'src/app/Services/user-data-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private userData: UserDataServiceService){}

  getUserData(data:any){
    this.userData.saveUsers(data).subscribe((result)=>{
      console.log(result);
    })
  }
}
