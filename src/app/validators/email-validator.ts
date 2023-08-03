import { ValidatorFn } from "@angular/forms";

export function emailValidator(): ValidatorFn {
  return (control) => {
    const regExp = new RegExp('^[a-z]+@{1}[a-z]+\.{1}[a-z]{2,3}$', 'i');
    return control.value === "" || regExp.test(control.value)
      ? null
      : { emailValidator: true };
  };
}