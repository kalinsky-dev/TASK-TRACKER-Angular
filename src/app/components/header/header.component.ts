import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title: string = 'Task Tracker';

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
