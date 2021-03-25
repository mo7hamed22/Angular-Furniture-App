import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/Services/user.service';
import { ConfirmPasswordValidator } from 'src/shared/confirmPassword.validator';
import { ForbiddenNameValidator } from 'src/shared/userName.validator';

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  //form module init with  service
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
        [Validators.required]
        /*
        ForbiddenNameValidator(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )*/
      ],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", [Validators.required]]
    },
    { validators: [ConfirmPasswordValidator] }
  );

  constructor(private fb: FormBuilder, private userService:UserService) {} // we describe this with injection when we call a service form bilder like this

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
  submitData(){
   console.log(this.registerationForm);
    this.userService.register(this.registerationForm.value).subscribe(

      data=>{console.log("success"); },error=>{console.log("error",error)}
    )
  }
}
