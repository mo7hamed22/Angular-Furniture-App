import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  //form module init with  service
  registerationForm = this.fb.group({
    firstName: ["", [Validators.required, Validators.minLength(3)]],
    lastName: ["", [Validators.required]],
    Email: ["", [Validators.required]],
    password: ["", [Validators.required, Validators.minLength(6)]],
    confirmPassword: ["", [Validators.required]],
    address: this.fb.group({
      state: ["", [Validators.required]],
      city: ["", [Validators.required]],
      postalCode: ["", [Validators.required]],
    }),
  });

  constructor(private fb: FormBuilder) {} // we describe this with injection when we call a service form bilder like this

  ngOnInit(): void {}

  get firstname() {
    return this.registerationForm.get("firstName");
  }
  get lastname() {
    return this.registerationForm.get("lastName");
  }
  get email() {
    return this.registerationForm.get("Email");
  }
  get password() {
    return this.registerationForm.get("password");
  }
  get confirmpassword() {
    return this.registerationForm.get("confirmPassword");
  }
}
