import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  ALproducts } from '../interfaces/interface';
import { AllproductsService } from '../services/allproducts.service';

@Component({
  selector: 'app-freespaces',
  templateUrl: './freespaces.component.html',
  styleUrls: ['./freespaces.component.scss']
})
export class FreespacesComponent implements OnInit {

  CupBord: ALproducts[] = [];
  errormsg3:any ="";

  constructor(private allfree:AllproductsService, private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.allfree.getAllProducts().subscribe(
      data => {
     
      this.CupBord= data.filter((product) => {
      console.log(product.category)
      return product.category == "cupbord"
      })
     
     
      },
      serviceErr => {
      this.errormsg3 = serviceErr;
      
      })


}

}
