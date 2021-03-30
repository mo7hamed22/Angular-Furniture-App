import { Component, OnInit } from "@angular/core";
import { ConfirmPasswordValidator } from "src/shared/confirmPassword.validator";
import {FormBuilder,Validators} from "@angular/forms";



import { ForbiddenNameValidator } from "src/shared/userName.validator";
import { UsersService } from "../services/users.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  //form module init with  service
  emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

  registerationForm = this.fb.group(
    {
      firstName: [
        "",
        [
          Validators.required,
          Validators.minLength(3),
          ForbiddenNameValidator(/admin/),
        ],
      ],
      lastName: ["", [Validators.required]],
      Email: [
        "",
        [Validators.required],
        Validators.pattern(this.emailRegx),
        ForbiddenNameValidator(this.emailRegx),
      ], //
      Password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", [Validators.required, Validators.minLength(6)]],
    },
    { Validators: ConfirmPasswordValidator } //group(controlsConfig: { [key: string]: any; }, options?: AbstractControlOptions | null): FormGroup;
  );
  constructor(private fb: FormBuilder, private userService: UsersService) {} // we describe this with injection when we call a service form bilder like this

  ngOnInit(): void {}

  get firstName() {
    return this.registerationForm.get("firstName");
  }
  get lastName() {
    return this.registerationForm.get("lastName");
  }
  get Email() {
    return this.registerationForm.get("Email");
  }
  get Password() {
    return this.registerationForm.get("Password");
  }
  get confirmPassword() {
    return this.registerationForm.get("confirmPassword");
  }

  submitData() {
    alert(this.registerationForm.get("firstName")?.value);
    this.userService.register(this.registerationForm.value).subscribe(
      (data) => {
        console.log("success");
      },
      (error) => {
        console.log("error", error);
      }
    );
  }
}
