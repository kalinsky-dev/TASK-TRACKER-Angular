import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/types/Task';
import { TASKS } from 'src/app/mock-tasks';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getAll()
      .subscribe((tasksArr) => { this.tasks = tasksArr })
  }
}
