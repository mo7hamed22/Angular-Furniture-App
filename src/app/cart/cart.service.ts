import { Injectable } from '@angular/core';
import { AllproductsService } from '../services/allproducts.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  constructor(private _productService:AllproductsService) {}
  productInCart:any;
  totalPrice = 0;

}


    