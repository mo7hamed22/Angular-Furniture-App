import { Component, OnInit } from '@angular/core';
import { OffersService } from '../offers.service';
import { IofferedProducts } from '../interfaces/IofferedProducts';
import {Router} from '@angular/router';
 

@Component({
  selector: 'app-products-with-offer',
  templateUrl: './products-with-offer.component.html',
  styleUrls: ['./products-with-offer.component.scss']
})
export class ProductsWithOfferComponent implements OnInit {
  offeredFurniture:IofferedProducts[]=[];
  offeredStoreItems:IofferedProducts[]=[];
  offeredDecorations:IofferedProducts[]=[];
  freeDelivery:IofferedProducts[]=[];
  errorMessage:any;

  slides: any = [[]];
  /*chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }*/
  constructor(private OffersService:OffersService,private router:Router) { }

  ngOnInit(): void {
   // this.slides = this.chunk(this.offeredFurniture, 3);
  /* this.OffersService.GetOfferedFurniture().subscribe(
      serviceData=>
       {
         this.offeredFurniture=serviceData;
       },
       serviceError=>
       {
        this.errorMessage=serviceError;
       }
  
    )



    this.OffersService.GetOfferedDecorations().subscribe(
      serviceData=>
       {
         this.offeredDecorations=serviceData;
       },
       serviceError=>
       {
        this.errorMessage=serviceError;
       }
  
    )



    this.OffersService.GetOfferedStore().subscribe(
      serviceData=>
       {
         this.offeredStoreItems=serviceData;
       },
       serviceError=>
       {
        this.errorMessage=serviceError;
       }
  
    )*/




    this.OffersService.getAllProducts().subscribe(
      serviceData => {
     
      this.offeredStoreItems = serviceData.filter((product) => {
      console.log(product.name)
      return product.category == "store"
      })
     
      console.log("free delivery", this.offeredStoreItems)
      },
      serviceErr => {
      this.errorMessage = serviceErr;
      
      })
    



      this.OffersService.getAllProducts().subscribe(
        serviceData => {
       
        this.offeredFurniture = serviceData.filter((product) => {
        console.log(product.name)
        return product.category == "furniture"
        })
       
        console.log("free delivery", this.offeredFurniture)
        },
        serviceErr => {
        this.errorMessage = serviceErr;
        
        })


        this.OffersService.getAllProducts().subscribe(
          serviceData => {
         
          this.offeredDecorations = serviceData.filter((product) => {
          console.log(product.name)
          return product.category == "decoration"
          })
         
          console.log("free delivery", this.offeredDecorations)
          },
          serviceErr => {
          this.errorMessage = serviceErr;
          
          })



 /*  this.OffersService.getAllProducts().subscribe(
      data => {
     
      this.OffersService = data.filter((product) => {
      console.log(product.category)
      return product.category == "furniture"
      })
     
      console.log("Living", this.OffersService)
      },
      serviceErr => {
      this.errorMessage = serviceErr;
      
      })*/




  

  }


  goToProductDetails(product:any){
let productId=product.id;
this.router.navigate(['/products',productId])
  }



 




}











 /*goToProductDetails(product){
let productId=product.id;
this.router.navigate(['/products',productId])
  }*/

/*}




export class ProductsWithOfferComponent implements OnInit {
  offeredFurniture:IofferedProducts[]=[];
  offeredStoreItems:IofferedProducts[]=[];
  offeredDecorations:IofferedProducts[]=[];
  freeDelivery:IofferedProducts[]=[];
  errorMessage;

  slides: any = [[]];
  chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }
  constructor(private OffersService:OffersService,private router:Router) { }

  ngOnInit(): void {
    this.slides = this.chunk(this.offeredFurniture, 3);
  /* this.OffersService.GetOfferedFurniture().subscribe(
      serviceData=>
       {
         this.offeredFurniture=serviceData;
       },
       serviceError=>
       {
        this.errorMessage=serviceError;
       }
  
    )



    this.OffersService.GetOfferedDecorations().subscribe(
      serviceData=>
       {
         this.offeredDecorations=serviceData;
       },
       serviceError=>
       {
        this.errorMessage=serviceError;
       }
  
    )



    this.OffersService.GetOfferedStore().subscribe(
      serviceData=>
       {
         this.offeredStoreItems=serviceData;
       },
       serviceError=>
       {
        this.errorMessage=serviceError;
       }
  
    )*/




    /*this.OffersService.getAllProducts().subscribe(
      serviceData => {
     
      this.offeredStoreItems = serviceData.filter((product) => {
      console.log(product.name)
      return product.category == "store"
      })
     
      console.log("free delivery", this.offeredStoreItems)
      },
      serviceErr => {
      this.errorMessage = serviceErr;
      
      })
    



      this.OffersService.getAllProducts().subscribe(
        serviceData => {
       
        this.offeredFurniture = serviceData.filter((product) => {
        console.log(product.name)
        return product.category == "furniture"
        })
       
        console.log("free delivery", this.offeredFurniture)
        },
        serviceErr => {
        this.errorMessage = serviceErr;
        
        })


        this.OffersService.getAllProducts().subscribe(
          serviceData => {
         
          this.offeredDecorations = serviceData.filter((product) => {
          console.log(product.name)
          return product.category == "decoration"
          })
         
          console.log("free delivery", this.offeredDecorations)
          },
          serviceErr => {
          this.errorMessage = serviceErr;
          
          })



 /*  this.OffersService.getAllProducts().subscribe(
      data => {
     
      this.OffersService = data.filter((product) => {
      console.log(product.category)
      return product.category == "furniture"
      })
     
      console.log("Living", this.OffersService)
      },
      serviceErr => {
      this.errorMessage = serviceErr;
      
      })*/




  

  /*}


  goToProductDetails(product){
let productId=product.id;
this.router.navigate(['/products',productId])
  }*/



 











