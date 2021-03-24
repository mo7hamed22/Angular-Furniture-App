import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-allcategory',
  templateUrl: './allcategory.component.html',
  styleUrls: ['./allcategory.component.scss']
})
export class AllcategoryComponent implements OnInit {
  

  constructor( private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  }
  productsWithDiscount(){
    this.router.navigate(['bedroom'],{relativeTo:this.activatedRoute})
  
  }
  productsNoDiscount(){
    this.router.navigate(['allfurniture'],{relativeTo:this.activatedRoute})
  
  }

}
