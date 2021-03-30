import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessiorsComponent } from './accessiors/accessiors.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { Category2Component } from './bedroom/category2.component';

import { FreespacesComponent } from './freespaces/freespaces.component';
import { Category1Component } from './livingroom/category1.component';
import { LoginComponent } from './login/login.component';
import { ProductsdetailsComponent } from './productsdetails/productsdetails.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: "", redirectTo: "/allprducts", pathMatch: "full" },
  { path: "allprducts", component: AllproductsComponent },
  { path: "allprducts/:id", component: ProductsdetailsComponent },
  { path: "bedroom", component: Category2Component },
  { path: "livingroom", component: Category1Component },
  { path: "freespaces", component: FreespacesComponent },
  { path: "decoration", component: AccessiorsComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
