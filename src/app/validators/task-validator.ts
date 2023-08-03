import { ValidatorFn } from "@angular/forms";

export function taskValidator(): ValidatorFn {
  return (control) => {
    return control.value == ""
      ? { taskValidator: true }
      : null;
  };
}