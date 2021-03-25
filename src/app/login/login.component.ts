import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  //form module init with  service
  registerationForm = this.fb.group({
    Email: ["", [Validators.required]],
    password: ["", [Validators.required]],
  });

  constructor(private fb: FormBuilder) {} // we describe this with injection when we call a service form bilder like this

  ngOnInit(): void {}

  get email() {
    return this.registerationForm.get("Email");
  }
  get password() {
    return this.registerationForm.get("password");
  }
}
