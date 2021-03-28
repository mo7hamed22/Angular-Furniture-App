import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  productID: any;
  productData: any;
  errorMessage: any;
  constructor(
      private crudService: OffersService,
      private router: Router,
      private actRoute: ActivatedRoute) { }

  ngOnInit() {
   this. productID = this.actRoute.snapshot.params['id'];
this.getProduct(this.productID);
  }
 /*loadProductDetails(productID){
    this.crudService(productID).subscribe(product => {
      this.productData = product;
    });
  }*/



  
getProduct(id: number) {
  this.crudService.getProduct(id)
      .subscribe(
      product => this.productData = product,
      error => this.errorMessage = <any>error);
}


  navigation(link:any){
    this.router.navigate([link]);
  }
}

