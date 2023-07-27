import { Injectable } from '@angular/core';
import { User } from '../types/User';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  user: User | undefined;
  USER_KEY = '[user]';

  constructor(private http: HttpClient) {
    try {
      const lsUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(lsUser);
    } catch (error) {
      this.user = undefined;
    }
  }

  get isLogged(): boolean {
    return !!this.user;
  }

  login(email: string, password: string) {

    // this.user = {
    //   email: 'kalin@gmail.com',
    //   password: '12345'
    // }
    // localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
    //ToDo: for now I do not handle the data from the server!

    return this.http
      .post<User>('/api/users/login', { email, password })
      .pipe(tap((user) => {
        this.user = user;
        localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
      }));
  }

  register(email: string, password: string) {
    return this.http
      .post<User>('/api/users/register', { email, password })
      .pipe(tap((user) => {
        this.user = user;
        localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
      }));
  }


  logout() {
    // this.user = undefined;
    // localStorage.removeItem(this.USER_KEY);
    //ToDo: for now I do not work with the server!

    return this.http
      .post<User>('/api/users/logout', {})
      .pipe(tap(() => {
        this.user = undefined;
        localStorage.removeItem(this.USER_KEY);
      }));
  }
}
