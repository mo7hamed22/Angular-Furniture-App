import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-m-login',
  templateUrl: './m-login.component.html',
  styleUrls: ['./m-login.component.scss']
})
export class MLoginComponent implements OnInit {
  username = "";
  password = "";
  constructor() { }

  ngOnInit(): void {
  }
  onButtonClick(){
    console.log("Clicked");
  }

}
