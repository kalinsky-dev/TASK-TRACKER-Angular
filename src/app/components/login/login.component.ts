import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  @ViewChild('loginForm') loginForm: NgForm | undefined;



  loginSubmitHandler(): void {
    if (!this.loginForm) return;

    const form = this.loginForm;

    if (form.invalid) {
      return
    }

    const value: { email: string; password: string } = form.value;
    // console.log(value);
    form.setValue({ email: '', password: '' })
  }

}
