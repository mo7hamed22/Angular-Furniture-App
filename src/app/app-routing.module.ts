import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessiorsComponent } from './accessiors/accessiors.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { Category2Component } from './bedroom/category2.component';
// <<<<<<< HEAD
import { AddProductComponent } from './dashboard-m/add-product/add-product.component';
import { HomeComponent } from './dashboard-m/home/home.component';

import { CartComponent } from './cart/cart/cart.component';
// >>>>>>> c17696f4c99fd8d45003d95cc6ecb9048366b318

import { FreespacesComponent } from './freespaces/freespaces.component';
import { Category1Component } from './livingroom/category1.component';
import { ProductsdetailsComponent } from './productsdetails/productsdetails.component';
import { ProductsWithOfferComponent } from './products-with-offer/products-with-offer.component';
import { FreeDeliveryComponent } from './free-delivery/free-delivery.component';
import { HalfDiscountComponent } from './half-discount/half-discount.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { EditProductcComponent } from './dashboard-m/edit-productc/edit-productc.component';
//import {ProductDetailsComponent} from './product-details/product-details.component';

const routes: Routes = [
  // <<<<<<< HEAD

  {
    path: 'home_d', component: HomeComponent,
    children: [{ path: 'editProduct/:productId', component: EditProductcComponent }]

  },
  { path: 'addProduct', component: AddProductComponent },
  { path: '', redirectTo: '/allprducts', pathMatch: 'full' },
  { path: 'allprducts', component: AllproductsComponent },
  { path: 'allprducts/:id', component: ProductsdetailsComponent },
  { path: 'bedroom', component: Category2Component },
  { path: 'livingroom', component: Category1Component },
  { path: 'freespaces', component: FreespacesComponent },
  { path: 'decoration', component: AccessiorsComponent },
  { path: 'wishlist', component: WishListComponent },

  // =======
  { path: 'offers', component: ProductsWithOfferComponent },
  { path: 'freeDelivery', component: FreeDeliveryComponent },
  { path: 'halfDiscount', component: HalfDiscountComponent },

  { path: 'products/:id', component: ProductDetailsComponent },
  { path: 'productDetails', component: ProductDetailsComponent },

  //  // {path:'products/:id',component:ProductDetailsComponent},
  //   {path:'',redirectTo:'/allprducts',pathMatch:'full'},
  //     {path:'allprducts',component:AllproductsComponent},

  //     {path:'bedroom',component:Category2Component},
  //     {path:'livingroom',component:Category1Component},
  //     {path:'freespaces',component:FreespacesComponent},
  //     {path:'decoration',component:AccessiorsComponent},
  { path: 'cart', component: CartComponent }

  // >>>>>>> c17696f4c99fd8d45003d95cc6ecb9048366b318
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
