import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/types/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  userData: User = { email: '', password: '' }

  constructor(private userService: UserService, private router: Router) { }

  @ViewChild('loginForm') loginForm: NgForm | undefined;

  loginSubmitHandler(): void {
    if (!this.loginForm) return;

    const form = this.loginForm;

    if (form.invalid) {
      return
    }

    // const value: { email: string; password: string } = form.value;
    // console.log(value);
    // form.setValue({ email: '', password: '' })
    // this.userData = { email: value.email, password: value.password };
    // console.log(this.userData);
    //ToDo: for now I do not handle the data from the server!

    const { email, password } = form.value;

    this.userService.login(email, password).subscribe(() => {
      form.setValue({ email: '', password: '' })
      this.router.navigate(['/tasks']);
    });
  }
}
