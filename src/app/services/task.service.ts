import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Task } from '../types/Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getAll() {
    const { baseUrl } = environment;
    const url = `${baseUrl}/data/tasks`
    return this.http.get<Task[]>(url)
  }

  getOne() { }

  create() { }

  edit() { }

  remove() { }

}
