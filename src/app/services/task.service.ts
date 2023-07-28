import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Task } from '../types/Task';

@Injectable({
  providedIn: 'root'
})

export class TaskService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Task[]>('/api/data/tasks')
  }

  getOne(taskId: string) {
    return this.http.get<Task>(`/api/data/tasks/${taskId}`)
  }

  create(taskData: object) {
    return this.http.post<Task[]>('/api/data/tasks', taskData)
  }

  edit(taskId: string, taskData: object) {
    return this.http.put(`/api/data/tasks/${taskId}`, taskData)
  }

  remove(taskId: string) {
    return this.http.delete(`/api/data/tasks/${taskId}`)
  }

}

