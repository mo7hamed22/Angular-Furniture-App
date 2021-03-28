import { Component, OnInit } from '@angular/core';
import { OffersService } from '../offers.service';
import { IofferedProducts } from '../interfaces/IofferedProducts';
import {Router} from '@angular/router';


@Component({
  selector: 'app-half-discount',
  templateUrl: './half-discount.component.html',
  styleUrls: ['./half-discount.component.scss']
})
export class HalfDiscountComponent implements OnInit {
  halfDiscount:IofferedProducts[]=[];
  errorMessage:any;
  constructor(private OffersService:OffersService,private router:Router) { }

  ngOnInit(): void {

    this.OffersService.getAllProducts().subscribe(
      serviceData => {
     
      this.halfDiscount = serviceData.filter((product) => {
      console.log(product.discount)
      return product.discount == "50%"
      })
     
      console.log("halfdiscount", this.halfDiscount)
      },
      serviceErr => {
      this.errorMessage = serviceErr;
      
      })
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
  selector: 'app-half-discount',
  templateUrl: './half-discount.component.html',
  styleUrls: ['./half-discount.component.scss']
})
export class HalfDiscountComponent implements OnInit {
  halfDiscount:IofferedProducts[]=[];
  errorMessage;
  constructor(private OffersService:OffersService,private router:Router) { }

  ngOnInit(): void {

 /*   this.OffersService.GetHalfDiscount().subscribe(
      serviceData=>
       {
         this.halfDiscount=serviceData;
       },
       serviceError=>
       {
        this.errorMessage=serviceError;
       }
  
    )



    this.OffersService.getAllProducts().subscribe(
      serviceData => {
     
      this.halfDiscount = serviceData.filter((product) => {
      console.log(product.discount)
      return product.discount == "50%"
      })
     
      console.log("halfdiscount", this.halfDiscount)
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
