import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/types/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { User } from 'src/app/types/User';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})

export class TaskComponent implements OnInit {

  @Input() task!: Task;
  @Input() user!: User;

  faTimes = faTimes;
  ifOwner!: boolean | undefined;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.ifOwner = this.user.email == this.task.owner;
  }

  onTaskClickHandler(taskId: string) {
    // console.log(taskId);
    this.router.navigate([`/tasks/${taskId}`])
  }

  onDeleteClickHandler(taskId: string) {
    // console.log(taskId);
    this.router.navigate([`/tasks/${taskId}/delete`])
  }
}
