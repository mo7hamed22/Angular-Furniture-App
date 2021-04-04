import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddToCartService } from '../add-to-cart.service';
import { ALproducts } from '../interfaces/interface';
import { AllproductsService } from '../services/allproducts.service';
import { ProductIncartService } from '../services/product-incart.service';
import { MatDialog } from '@angular/material/dialog';
import { AddtoCarDialogComponent } from './addto-car-dialog/addto-car-dialog.component';
import { CartDialogComponent } from './addto-car-dialog/cart-dialog/cart-dialog.component';
import { WishlistdialogComponent } from './wishlistdialog/wishlistdialog.component';
@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.scss']
})
export class AllproductsComponent implements OnInit {
  errormsg3: any;
  AllProductList: ALproducts[] = [];
  wishesProduct: string[] = []
  cartProduct: string[] = []
  isClicked: boolean = false;
  isTrue = false;

  constructor(
    private allproducts: AllproductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public dialog: MatDialog,


    ////////////////////////////////////////////////
    // start Nada
    private addProductToCart: ProductIncartService
  ) { }



  sendProductTocart(productName: any) {
    if (this.cartProduct.includes(productName)) {
      this.dialog.open(CartDialogComponent)
    } else {
      this.dialog.open(AddtoCarDialogComponent);
      this.cartProduct.push(productName)
      localStorage.setItem("cartProduct_id", JSON.stringify(this.cartProduct))
    }
  }

  sendProductWishList(productName: any) {
    if (this.wishesProduct.includes(productName)){
      this.dialog.open(WishlistdialogComponent)
    }else{
      this.isTrue != this.isTrue
      this.wishesProduct.push(productName)
      localStorage.setItem("wishesProductName", JSON.stringify(this.wishesProduct))
      console.log("Get IDS LocalStorage", localStorage.getItem("wishesProductName"))
    }
  }

  cart: any
  i = 1

  wishes: any
  c = 1;

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
    ///======Mo
    if (localStorage.getItem("wishesProductName") !== null) {
      this.wishes = localStorage.getItem("wishesProductName")?.split('"')
      //console.log(typeof (localStorage.getItem("wishesProductName")), this.cart)
      for (this.c; this.c < this.wishes.length - 1; this.c++) {
        if (this.wishes[this.c] !== ",") {
          //console.log(this.wishes[this.c])
          this.wishesProduct.push(this.wishes[this.c])
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


