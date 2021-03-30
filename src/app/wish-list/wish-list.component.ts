import { Component, OnInit } from '@angular/core';
import { ALproducts } from '../interfaces/interface';
import { IProductWishes } from '../interfaces/interfaceWishes';
import { AllproductsService } from '../services/allproducts.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {

  constructor(
    private _productService: AllproductsService,
    //private cartProduct: ProductIncartService
  ) { }
  /////////////////////////////////////////////////////////////


  productInCart: IProductWishes[] = [];
  allProductInWisheList: ALproducts[] = [];

  product: any;
  product1 = ''

  wishesProducts: string[] = []
  productCart: any;
  wishe: any
  i = 1
  wishProduct: any;
  Quantity = 1

  deleteFromWish(productName: any) {
    console.log("all Product", productName)
    this.allProductInWisheList = this.allProductInWisheList.filter((product) => {
      console.log(product.productName)
      return product.productName !== productName
    })

    localStorage.setItem("wishesProductName", JSON.stringify(this.allProductInWisheList))

  }




  ngOnInit(): void {

    this.wishe = localStorage.getItem("wishesProductName")?.split('"')
    console.log(typeof (localStorage.getItem("wishesProductName")), this.wishe)
    for (this.i; this.i < this.wishe.length - 1; this.i++) {
      if (this.wishe[this.i] !== ",") {
        console.log(this.wishe[this.i])
        this.wishesProducts.push(this.wishe[this.i])
      }
    }

    this._productService.getAllProducts().subscribe(
      data => {
        for (this.i = 0; this.i <= this.wishesProducts.length - 1; this.i++) {
          this.wishProduct = data.filter(product => {
            return product.productName == this.wishesProducts[this.i]
          }
          )
          this.allProductInWisheList.push(...this.wishProduct)
          console.log("Wishes", this.allProductInWisheList)
        }


      })
  }
  wishes: string[] = [];
  wishesProduct: any = [];
  addToCart(ProductName: any) {

    this.wishes.push(ProductName)
    localStorage.setItem("cartProduct_id", JSON.stringify(this.wishesProduct))
  }

}
