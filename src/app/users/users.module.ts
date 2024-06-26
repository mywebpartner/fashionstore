import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; 

@NgModule({
  declarations: [
    DashboardComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
  ]
})
export class UsersModule { }
