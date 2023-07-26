import { Injectable } from '@angular/core';
import { User } from '../types/User';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  user: User | undefined;
  USER_KEY = '[user]';

  constructor() {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
    } catch (error) {
      this.user = undefined;
    }
  }

  get isLogged(): boolean {
    return !!this.user;
  }

  login(): void {
    this.user = {
      email: 'kalin@gmail.com',
      password: '12345'
    }

    localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
  }

  logout(): void {
    this.user = undefined;
    localStorage.removeItem(this.USER_KEY);
  }
}
