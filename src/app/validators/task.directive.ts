import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { taskValidator } from './task-validator';

@Directive({
  selector: '[appTask]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: TaskDirective,
      multi: true,
    }
  ]
})
export class TaskDirective implements Validator {

  validator: ValidatorFn = () => null;

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    this.validator = taskValidator();
    return this.validator(control);
  }

}
