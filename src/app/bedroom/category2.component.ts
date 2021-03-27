import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ALbedroom } from '../interfaces/interface';
import { AllproductsService } from '../services/allproducts.service';

@Component({
  selector: 'app-category2',
  templateUrl: './category2.component.html',
  styleUrls: ['./category2.component.scss']
})


export class Category2Component implements OnInit {

  bedRoom: ALbedroom[] = [];
  errormsg3: any = "";

  constructor(private bedRooms: AllproductsService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.bedRooms.getBedRoom().subscribe(
      data => {
        this.bedRoom = data;
      },
      serviceErr => {
        this.errormsg3 = serviceErr;

      }

    )


  }
dd=1
  //=====================
  //Nada start
  addTocart(dd:number) {
    console.log(dd)
  }
  // Nada End
  //========================
  
}