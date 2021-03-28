import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessiorsComponent } from './accessiors/accessiors.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { Category2Component } from './bedroom/category2.component';
import { AddProductComponent } from './dashboard-m/add-product/add-product.component';
import { HomeComponent } from './dashboard-m/home/home.component';

import { FreespacesComponent } from './freespaces/freespaces.component';
import { Category1Component } from './livingroom/category1.component';
import { ProductsdetailsComponent } from './productsdetails/productsdetails.component';

const routes: Routes = [

  { path: 'home_d', component: HomeComponent },
  { path: 'addProduct', component: AddProductComponent },
  { path: '', redirectTo: '/allprducts', pathMatch: 'full' },
  { path: 'allprducts', component: AllproductsComponent },
  { path: 'allprducts/:id', component: ProductsdetailsComponent },
  { path: 'bedroom', component: Category2Component },
  { path: 'livingroom', component: Category1Component },
  { path: 'freespaces', component: FreespacesComponent },
  { path: 'decoration', component: AccessiorsComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
