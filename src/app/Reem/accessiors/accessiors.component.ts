import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ALaccessiors } from '../interfaces/interface';
import { AllproductsService } from '../services/allproducts.service';
import {FormControl} from '@angular/forms'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-accessiors',
  templateUrl: './accessiors.component.html',
  styleUrls: ['./accessiors.component.scss']
})
export class AccessiorsComponent implements OnInit {

  Accessiors: ALaccessiors[] = [];

  errormsg3:any ="";
  myControl = new FormControl();



  constructor(private allproducts:AllproductsService, private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {



    this.allproducts.getAccessiors().subscribe(
      data=>{
      this.Accessiors=data;
    },
    serviceErr => {
      this.errormsg3 = serviceErr;

    }

     )
  }
  diplayFn(product:any){
    return product ? product.name :undefined

  }

}
