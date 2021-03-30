import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, FormControl, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from 'src/shared/userName.validator';
import { UsersService } from '../services/users.service';
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  constructor(private fb: FormBuilder, private userService: UsersService) {} // we describe this with injection when we call a service form bilder like this
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  //form module init with  service
  registerationForm = this.fb.group({
    Email: [
      "",
      [Validators.required],
      Validators.pattern(this.emailRegx),
      ForbiddenNameValidator(this.emailRegx),
    ], //
    Password: ["", [Validators.required, Validators.minLength(6)]],
  });

  ngOnInit(): void {}

  get Email() {
    return this.registerationForm.get("Email");
  }
  get Password() {
    return this.registerationForm.get("Password");
  }

  submitData() {
    alert(this.registerationForm.get("Email")?.value);
    this.userService.login(this.registerationForm.value).subscribe(
      (data) => {
        console.log("success");
      },
      (error) => {
        console.log("error", error);
      }
    );
  }
}
