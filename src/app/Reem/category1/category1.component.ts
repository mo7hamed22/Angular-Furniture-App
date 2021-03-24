import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProducts } from '../interfaces/interface';
import { AllproductsService } from '../services/allproducts.service';

@Component({
  selector: 'app-category1',
  templateUrl: './category1.component.html',
  styleUrls: ['./category1.component.scss']
})
export class Category1Component implements OnInit {
  ProductList: IProducts[] = [];
  errormsg3:any ="";

  constructor(private allproducts:AllproductsService, private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.allproducts.getLivingRoomProducts().subscribe(
      data=>{
      this.ProductList=data;
    },
    serviceErr => {
      this.errormsg3 = serviceErr;

    }

     )
  
  }

}