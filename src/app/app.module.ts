import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';

import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AllproductsComponent } from './allproducts/allproducts.component';
import { Category1Component } from './livingroom/category1.component';
import { Category2Component } from './bedroom/category2.component';
import { AllcategoryComponent } from './allcategory/allcategory.component';
import { NavbarcateogryComponent } from './navbarcateogry/navbarcateogry.component';
import { FreespacesComponent } from './freespaces/freespaces.component';
import { AccessiorsComponent } from './accessiors/accessiors.component';
import { HeaderComponent } from './header/header.component';
import { ProductsdetailsComponent } from './productsdetails/productsdetails.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
<<<<<<< HEAD
import { NavComponent } from './dashboard-m/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { HomeComponent } from './dashboard-m/home/home.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AddProductComponent } from './dashboard-m/add-product/add-product.component'
=======
import { CartComponent } from './cart/cart/cart.component';
//////////////////////////////////////////////////////////////
import { MatButtonToggleModule } from '@angular/material/button-toggle';
//import { MatIconModule } from '@angular/material/icon';
//import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDividerModule } from '@angular/material/divider';
import { MatRadioModule } from '@angular/material/radio';



import {MatToolbarModule} from '@angular/material/toolbar'
import {MatGridListModule} from '@angular/material/grid-list'
//import {MatCardModule} from '@angular/material/card'
//import {MatIconModule} from '@angular/material/icon';
//import {MatBadgeModule} from '@angular/material/badge';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ProductsWithOfferComponent } from './products-with-offer/products-with-offer.component';
//import {HttpClientModule} from '@angular/common/http';
import { FreeDeliveryComponent } from './free-delivery/free-delivery.component';
//import { TeximateModule } from 'ngx-teximate';
//import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HalfDiscountComponent } from './half-discount/half-discount.component';
//import { SingleProductComponent } from './single-product/single-product.component';
//import { FlexLayoutModule } from '@angular/flex-layout';
>>>>>>> c17696f4c99fd8d45003d95cc6ecb9048366b318

@NgModule({
  declarations: [
    AppComponent,
    AllproductsComponent,
    Category1Component,
    Category2Component,
    AllcategoryComponent,
    NavbarcateogryComponent,
    FreespacesComponent,
    AccessiorsComponent,
    HeaderComponent,
    ProductsdetailsComponent,
    NavComponent,
    HomeComponent,
    AddProductComponent,

   // ProductsWithOfferComponent,
   // FreeDeliveryComponent,
   // ProductDetailsComponent,
   // ProductDetailsComponent,
   // HalfDiscountComponent,*/
   // SingleProductComponent, 

    //CartComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    MatCardModule,
    FormsModule,
    HttpClientModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatIconModule,


=======


    
  /* MatButtonToggleModule,
    MatIconModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatMenuModule,
    MatSelectModule,
    MatStepperModule,
    MatDividerModule,
    MatRadioModule*/
>>>>>>> c17696f4c99fd8d45003d95cc6ecb9048366b318
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
