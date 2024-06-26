import { Component } from '@angular/core';
import { UserDataServiceService } from 'src/app/Services/user-data-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userData: UserDataServiceService){}

  getUserData(){
    this.userData.saveUsers(this.registerForm.value).subscribe((result)=>{
      console.log(result);
    })
  }

  registerForm = new FormGroup({  
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required,Validators.minLength(8)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    address: new FormControl(''),
    phone: new FormControl(''),
  })

  get username(){
    return this.registerForm.get('username');
  }

  get password(){
    return this.registerForm.get('password');
  }

  get email(){
    return this.registerForm.get('email');
  }
}
