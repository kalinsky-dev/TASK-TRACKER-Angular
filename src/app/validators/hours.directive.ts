import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { hoursValidator } from './hours-validator';

@Directive({
  selector: '[appHours]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: HoursDirective,
      multi: true
    }
  ]
})
export class HoursDirective implements Validator {

  validator: ValidatorFn = () => null;

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    this.validator = hoursValidator();
    return this.validator(control);
  }

}
