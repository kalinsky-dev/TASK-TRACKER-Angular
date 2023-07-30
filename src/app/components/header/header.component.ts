import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  title: string = 'Task Tracker';

  constructor(private userService: UserService, private router: Router) { }

  get isLoggedIn(): boolean {
    return this.userService.isLogged;
  }

  get userEmail(): string {
    return this.userService.user?.email || '';
  }

  hasRoute(route: string) {
    return this.router.url == route;
  }

  logout(): void {
    // this.userService.logout();
    // this.router.navigate(['/']);
    //ToDo: for now I do not work with the server!

    this.userService.logout().subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: () => {
        this.router.navigate(['/login']);
      }
    })
  }
}
