import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  
  @ViewChild('registerForm') registerForm: NgForm | undefined;

  registerSubmitHandler(): void {
    if (!this.registerForm) return;

    const form = this.registerForm;

    if (form.invalid) {
      return
    }

    const value: { email: string; password: string } = form.value;
    // console.log(value);
    form.setValue({ email: '', password: '',rePass:'' })
  }
}
