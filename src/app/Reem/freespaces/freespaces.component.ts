import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ALfree } from '../interfaces/interface';
import { AllproductsService } from '../services/allproducts.service';

@Component({
  selector: 'app-freespaces',
  templateUrl: './freespaces.component.html',
  styleUrls: ['./freespaces.component.scss']
})
export class FreespacesComponent implements OnInit {

  AllFree: ALfree[] = [];
  errormsg3:any ="";

  constructor(private allfree:AllproductsService, private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {

    this.allfree.getFree().subscribe(
      data=>{
      this.AllFree=data;
    },
    serviceErr => {
      this.errormsg3 = serviceErr;

    }

     )
  

}

}
