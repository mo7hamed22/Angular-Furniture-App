import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ALproducts } from '../interfaces/interface';
import { AllproductsService } from '../services/allproducts.service';

@Component({
  selector: 'app-category2',
  templateUrl: './category2.component.html',
  styleUrls: ['./category2.component.scss']
})
export class Category2Component implements OnInit {

 bedRoom: ALproducts[] = [];
  errormsg3:any ="";

  constructor(private bedRooms:AllproductsService, private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    

    

    this.bedRooms.getAllProducts().subscribe(
      data => {
     
      this.bedRoom= data.filter((product) => {
      console.log(product.category)
      return product.category == "bedroom"
      })
     
    
      },
      serviceErr => {
      this.errormsg3 = serviceErr;
      
      })

  
}

  

}
