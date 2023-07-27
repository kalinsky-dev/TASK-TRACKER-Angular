import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Task } from '../types/Task';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  tasks: Task[] = [];

  constructor(private http: HttpClient) {
    // const { baseUrl } = environment;
    // const url = `${baseUrl}/data/tasks`
    // this.http.get<Task[]>(url).subscribe({
    //   next: (tasksArr) => {
    //     this.tasks = tasksArr;
    //   },
    //   error: (err) => {
    //     console.error(`Error:${err}`)
    //     if (err.code == '404') {
    //       return;
    //     }
    //   }
    // })
  }

  getAll() {
    const { baseUrl } = environment;
    const url = `${baseUrl}/data/tasks`
    return this.http.get<Task[]>(url)
  }

  getOne() { }

  create() { }

  edit() { }

  remove() { }

  sort() { }

}
