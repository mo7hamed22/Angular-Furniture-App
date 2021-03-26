import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ALproducts } from '../interfaces/interface';
import { AllproductsService } from '../services/allproducts.service';

@Component({
  selector: 'app-productsdetails',
  templateUrl: './productsdetails.component.html',
  styleUrls: ['./productsdetails.component.scss']
})
export class ProductsdetailsComponent implements OnInit {

  AllProductList: ALproducts[] = [];
  errormsg3:any ="";

  constructor(private allproducts:AllproductsService, private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.allproducts.getAllProducts().subscribe(
      data=>{
      this.AllProductList=data;
    },
    serviceErr => {
      this.errormsg3 = serviceErr;

    }

     )
  
}
goTodetails(details:any){
  let detId = details.id;
  this.router.navigate(['/allprducts',detId])

}


}
