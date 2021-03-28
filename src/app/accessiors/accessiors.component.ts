import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ALproducts } from '../interfaces/interface';
import { AllproductsService } from '../services/allproducts.service';
import {FormControl} from '@angular/forms'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-accessiors',
  templateUrl: './accessiors.component.html',
  styleUrls: ['./accessiors.component.scss']
})
export class AccessiorsComponent implements OnInit {

  Decoration: ALproducts[] = [];

  errormsg3:any ="";
  myControl = new FormControl();



  constructor(private decoration:AllproductsService, private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.decoration.getAllProducts().subscribe(
      data => {
     
      this.Decoration= data.filter((product) => {
      console.log(product.category)
      return product.category == "decoration"
      })
     
      console.log("Living", this.Decoration)
      },
      serviceErr => {
      this.errormsg3 = serviceErr;
      
      })

    
  }

}
