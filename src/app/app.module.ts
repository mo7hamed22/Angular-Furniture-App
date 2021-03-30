import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';


import {HttpClientModule} from '@angular/common/http';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { Category1Component } from './livingroom/category1.component';
import { Category2Component } from './bedroom/category2.component';
import { AllcategoryComponent } from './allcategory/allcategory.component';
import { NavbarcateogryComponent } from './navbarcateogry/navbarcateogry.component';
import { FreespacesComponent } from './freespaces/freespaces.component';
import { AccessiorsComponent } from './accessiors/accessiors.component';
import { HeaderComponent } from './header/header.component';
import { ProductsdetailsComponent } from './productsdetails/productsdetails.component';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';


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
    RegisterComponent,
    LoginComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSliderModule,
    MatCardModule,
   
    HttpClientModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
     
  ReactiveFormsModule,
   FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
