import { Component, Input } from '@angular/core';
import { Task } from 'src/app/types/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent {

  @Input() task!: Task;
  faTimes = faTimes;

  constructor(private router: Router) { }

  onTaskClickHandler(taskId: string) {
    // console.log(taskId);
    this.router.navigate([`/tasks/${taskId}`])
  }

  onDeleteClickHandler( taskId: string) {
    // console.log(taskId);
    this.router.navigate([`/tasks/${taskId}/delete`])
  }
}
