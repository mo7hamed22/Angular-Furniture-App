import { Component, OnInit } from '@angular/core';
import { OffersService } from '../offers.service';
import { IofferedProducts } from '../interfaces/IofferedProducts';
import {Router} from '@angular/router';



@Component({
  selector: 'app-free-delivery',
  templateUrl: './free-delivery.component.html',
  styleUrls: ['./free-delivery.component.scss']
})
export class FreeDeliveryComponent implements OnInit {


    freeDelivery:IofferedProducts[]=[];
    errorMessage:any;
  constructor(private OffersService:OffersService,private router:Router) { }

  ngOnInit(): void {


   /* this.OffersService.GetFreeDelivery().subscribe(
      serviceData=>
       {
         this.freeDelivery=serviceData;
       },
       serviceError=>
       {
        this.errorMessage=serviceError;
       }*/
  



    /*   this.OffersService.GetOfferedFurniture().subscribe(
      serviceData=>
       {
         this.offeredFurniture=serviceData;
       },
       serviceError=>
       {
        this.errorMessage=serviceError;
       }*/

      this.OffersService.getAllProducts().subscribe(
        data => {
       
        this.freeDelivery = data.filter((product) => {
        console.log(product.discount)
        return product.discount == "free delivery"
        })
       
        console.log("free delivery", this.freeDelivery)
        },
        serviceErr => {
        this.errorMessage = serviceErr;
        
        })
  //  )
  //}

}
 
goToProductDetails(product:any){
  let productId=product.id;
  this.router.navigate(['/products',productId])
    }
}





/*import { Component, OnInit } from '@angular/core';
import { OffersService } from '../offers.service';
import { IofferedProducts } from '../Interfaces/IofferedProducts';
import {Router} from '@angular/router';



@Component({
  selector: 'app-free-delivery',
  templateUrl: './free-delivery.component.html',
  styleUrls: ['./free-delivery.component.scss']
})
export class FreeDeliveryComponent implements OnInit {


    freeDelivery:IofferedProducts[]=[];
  errorMessage:any;
  constructor(private OffersService:OffersService,private router:Router) { }

  ngOnInit(): void {

    this.OffersService.getAllProducts().subscribe(
      serviceData => {
     
      this.freeDelivery = serviceData.filter((product) => {
      console.log(product.discount)
      return product.discount == "free delivery"
      })
     
      console.log("free delivery", this.freeDelivery)
      },
      serviceErr => {
      this.errorMessage = serviceErr;
      
      })
  }*/
  

 




  /* this.OffersService.getAllProducts().subscribe(
      serviceData => {
     
      this.freeDelivery = serviceData.filter((product) => {
      console.log(product.discount)
      return product.discount == "free delivery"
      })
     
      console.log("free delivery", this.freeDelivery)
      },
      serviceErr => {
      this.errorMessage = serviceErr;
      
      })
  }
  

  
  goToProductDetails(product){
    let productId=product.id;
    this.router.navigate(['/products',productId])
      }
}*/

