import { ValidatorFn } from "@angular/forms";

export function hoursValidator(): ValidatorFn {
  return (control) => {
    return (!isNaN(control.value) && control.value > 0)
      ? null
      : { hoursValidator: true };
  };
}