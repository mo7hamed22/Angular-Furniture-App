import { Component, OnInit } from '@angular/core';
import { ISingleCart } from 'src/app/interfaces/GetSingleCartInterface';
import { AllproductsService } from 'src/app/services/allproducts.service';
// import { ISingleCart } from 'src/InterFaces/GetSingleCartInterface';
// import { ProductsService } from 'src/Services/products.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private _productService:AllproductsService) { }
/////////////////////////////////////////////////////////////


  productInCart:ISingleCart[] = [];
  totalPrice = 0;

  deletfromCart(_id:number){
    console.log("all produc" , _id)
    this.productInCart = this.productInCart.filter((product) => {
      console.log(product.id)
      return product.id !== _id
      })

  }
  /////////////////////////////////////////////////
  ngOnInit(): void {
 
    this._productService.getSingleCart().subscribe(
      data=>{
        this.productInCart = data
        console.log(data)

        for(let i=1; i < this.productInCart.length ; i=i+1){
          this.totalPrice += this.productInCart[i].price ;
        }

      }
    )
  }



  
}
