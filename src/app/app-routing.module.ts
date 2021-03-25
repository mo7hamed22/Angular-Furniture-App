import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { HomeComponent } from './home/home.component';
//import { MLoginComponent } from './m-login/m-login.component';

const routes: Routes = [
 // {path :'home',component:HomeComponent},
 // {path:'login' , component:MLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
