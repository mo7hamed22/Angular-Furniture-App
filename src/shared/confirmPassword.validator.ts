import { AbstractControl } from "@angular/forms";

export function ConfirmPasswordValidator(controls: AbstractControl) {
  let password =controls.get("Password")?.value;
  let confirmPassword = controls.get("confirmPassword")?.value;
alert(password+""+ confirmPassword);
  if (password.pristine || confirmPassword.pristine) {
    return null;
  } else {
    return password && confirmPassword && password.value !== confirmPassword.value ? { misMatch: true } : null;
  }
}
