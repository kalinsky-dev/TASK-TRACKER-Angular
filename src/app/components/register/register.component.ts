import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  @ViewChild('registerForm') registerForm: NgForm | undefined;

  constructor(private userService: UserService, private router: Router) { }

  registerSubmitHandler(): void {
    if (!this.registerForm) return;

    const form = this.registerForm;
   
    if (form.invalid) {
      return
    }

    // const value: { email: string; password: string } = form.value;
    // console.log(value);
    // form.setValue({ email: '', password: '', rePass: '' })
    //ToDo: for now I do not handle the data from the server!

    const { email, password, rePass } = form.value;

    this.userService.register(email, password).subscribe(() => {
      form.setValue({ email: '', password: '', rePass: '' })
      this.router.navigate(['/tasks']);
    });
  }
}
