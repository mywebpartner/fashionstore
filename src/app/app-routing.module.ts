import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './users/dashboard/dashboard.component';
import { RegisterComponent } from './users/register/register.component';
import { LoginComponent } from './users/login/login.component';

const routes: Routes = [
  {
    path:'users',
    children:[
      {
        path:'dashboard',
        component:DashboardComponent
      },
      {
        path:'register',
        component:RegisterComponent
      },
      {
        path:'login',
        component:LoginComponent
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
