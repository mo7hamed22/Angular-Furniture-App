import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbarcateogry',
  templateUrl: './navbarcateogry.component.html',
  styleUrls: ['./navbarcateogry.component.scss']
})
export class NavbarcateogryComponent implements OnInit {
  show:boolean = true;
  show2:boolean = true;

  constructor() { }
  display(){

    this.show =!this.show
  
  }
  display2(){

    this.show2 =!this.show2
  
  }

  ngOnInit(): void {
  }

}
