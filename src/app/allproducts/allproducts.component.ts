import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddToCartService } from '../add-to-cart.service';
import { ALproducts } from '../interfaces/interface';
import { AllproductsService } from '../services/allproducts.service';
import { ProductIncartService } from '../services/product-incart.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.scss']
})
export class AllproductsComponent implements OnInit {
  errormsg3: any;
  AllProductList: ALproducts[] = [];


  constructor(
    private allproducts: AllproductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,

  ////////////////////////////////////////////////
  // start Nada
    private addProductToCart: ProductIncartService
  ) { }

  
  cartProduct: string[] = []
  sendProductToService(productId: any) {
    this.addProductToCart.sendToCar('kk')

    this.cartProduct.push(productId)
    localStorage.setItem("cartProduct_id", JSON.stringify(this.cartProduct))
  }

  cart: any
  i = 1


  ngOnInit(): void {
    if (localStorage.getItem("cartProduct_id") !== null) {
      this.cart = localStorage.getItem("cartProduct_id")?.split('"')
      console.log(typeof (localStorage.getItem("cartProduct_id")), this.cart)
      for (this.i; this.i < this.cart.length - 1; this.i++) {
        if (this.cart[this.i] !== ",") {
          console.log(this.cart[this.i])
          this.cartProduct.push(this.cart[this.i])
        }
      }
      
    }

    // end Nada
    /////////////////////// /////
    this.allproducts.getAllProducts().subscribe(
      data => {
        this.AllProductList = data;
      },
      serviceErr => {
        this.errormsg3 = serviceErr;

      }
    )

  }


}


