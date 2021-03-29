import { Component, OnInit } from '@angular/core';
import { ISingleCart } from 'src/app/interfaces/GetSingleCartInterface';
import { ALproducts } from 'src/app/interfaces/interface';
import { AllproductsService } from 'src/app/services/allproducts.service';
import { ProductIncartService } from 'src/app/services/product-incart.service';




@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(
    private _productService: AllproductsService,
    private cartProduct: ProductIncartService
  ) { }
  /////////////////////////////////////////////////////////////


  productInCart: ISingleCart[] = [];
  allproductInCart: ALproducts[] = [];

  totalPrice = 0;
  product:any;
  product1 = ''

  deletfromCart(productName:any) {
    console.log("all produc", productName)
    this.allproductInCart = this.allproductInCart.filter((product) => {
      console.log(product.productName)
      return product.productName !== productName
    })

    localStorage.setItem("cartProduct_id", JSON.stringify(this.allproductInCart))

  }
  d: string[] = []
  cartProducts: string[] = []
  productCart: any;
  cart: any
  i = 1
  cartpr:any;
  Quantity = 1

  ngOnInit(): void {
    this.cartProduct.resiveFromCar().subscribe(
      product => {
        this.productCart = this.d.push(product);
      }

    )
    // this._productService.getSingleCart().subscribe(
    //   data => {
    //     this.productInCart = data
    //     // for (let i = 1; i < this.productInCart.length; i = i + 1) {
    //     //   this.totalPrice += this.productInCart[i].price;
    //     // }

    //   }
    // )




    this.cart = localStorage.getItem("cartProduct_id")?.split('"')
    console.log(typeof (localStorage.getItem("cartProduct_id")), this.cart)
    for (this.i; this.i < this.cart.length - 1; this.i++) {
      if (this.cart[this.i] !== ",") {
        console.log(this.cart[this.i])
        this.cartProducts.push(this.cart[this.i])
      }
    }

    this._productService.getAllProducts().subscribe(
      data => {
        for(this.i=0; this.i <= this.cartProducts.length-1 ; this.i++){
          this.cartpr = data.filter(product => {
            return product.productName ==  this.cartProducts[this.i] 
          }
          )
          this.allproductInCart.push(...this.cartpr)
        }
       
        console.log(this.allproductInCart)
        for (let i = 1; i < this.allproductInCart.length; i = i + 1) {
          this.totalPrice += this.allproductInCart[i].price;
        }
      })
  }
 
}
