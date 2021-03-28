import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessiorsComponent } from './accessiors/accessiors.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { Category2Component } from './bedroom/category2.component';
import { CartComponent } from './cart/cart/cart.component';

import { FreespacesComponent } from './freespaces/freespaces.component';
import { Category1Component } from './livingroom/category1.component';
import { ProductsdetailsComponent } from './productsdetails/productsdetails.component';
import {ProductsWithOfferComponent} from './products-with-offer/products-with-offer.component';
import {FreeDeliveryComponent} from './free-delivery/free-delivery.component';
import {HalfDiscountComponent} from './half-discount/half-discount.component';
import {ProductDetailsComponent} from './product-details/product-details.component';
//import {ProductDetailsComponent} from './product-details/product-details.component';

const routes: Routes = [
  {path:'offers',component:ProductsWithOfferComponent},
  {path:'freeDelivery',component:FreeDeliveryComponent},
  {path:'halfDiscount',component:HalfDiscountComponent},
  {path:'products/:id',component:ProductDetailsComponent},
  //{path:'productDetails',component:ProductDetailsComponent},
 // {path:'products/:id',component:ProductDetailsComponent},
  {path:'',redirectTo:'/allprducts',pathMatch:'full'},
    {path:'allprducts',component:AllproductsComponent},
   
    {path:'bedroom',component:Category2Component},
    {path:'livingroom',component:Category1Component},
    {path:'freespaces',component:FreespacesComponent},
    {path:'decoration',component:AccessiorsComponent},
    {path: 'cart', component:CartComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
