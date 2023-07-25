import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private router: Router) { }

  title: string = 'Task Tracker';

  hasRoute(route: string) {
    return this.router.url == route;
  }

  sortHandler() {
    console.log('Sort Tasks');
  }

  addTaskHandler() {
    console.log('Add Task');
  }

  loginHandler() {
    console.log('Login');
  }

  registerHandler() {
    console.log('Register');
  }

  logoutHandler() {
    console.log('Logout');
  }
}
