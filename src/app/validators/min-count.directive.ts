import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appMinCount]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MinCountDirective,
      multi: true
    }
  ]
})
export class MinCountDirective implements Validator {

  @Input() appMinCount: number | undefined;

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    if (this.appMinCount === undefined ||
      control.value?.length === 0) {
      return null;
    }
    if (this.appMinCount) {
      if (control.value?.length <= this.appMinCount) {
        return { appMinCount: this.appMinCount }
      }
    }
    return null;
  }
}
