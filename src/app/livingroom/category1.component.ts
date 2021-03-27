import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ALproducts } from '../interfaces/interface';
import { AllproductsService } from '../services/allproducts.service';

@Component({
  selector: 'app-category1',
  templateUrl: './category1.component.html',
  styleUrls: ['./category1.component.scss']
})
export class Category1Component implements OnInit {

  
  LivingRoom: ALproducts[] = [];

  errormsg3:any ="";

  constructor(private livingroom:AllproductsService, private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.livingroom.getAllProducts().subscribe(
      data => {
     
      this.LivingRoom = data.filter((product) => {
      console.log(product.category)
      return product.category == "living room"
      })
     
      console.log("Living", this.LivingRoom)
      },
      serviceErr => {
      this.errormsg3 = serviceErr;
      
      })
}






}
