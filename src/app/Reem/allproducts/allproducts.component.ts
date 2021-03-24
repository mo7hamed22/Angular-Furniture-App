import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ALproducts, IProducts } from '../interfaces/interface';
import { AllproductsService } from '../services/allproducts.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.scss']
})
export class AllproductsComponent implements OnInit {
  errormsg3:any;
  AllProductList: ALproducts[] = [];


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


  }


