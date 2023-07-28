import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { TaskService } from 'src/app/services/task.service';
import { Task } from 'src/app/types/Task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})

export class TaskDetailsComponent implements OnInit {

  idToEdit!: string;
  task!: Task

  constructor(private taskService: TaskService, private activeRoute: ActivatedRoute, private router: Router) { }

  @ViewChild('editTaskForm') editTaskForm: NgForm | undefined;

  ngOnInit(): void {
    this.idToEdit = this.activeRoute.snapshot.params['taskId'];
    this.fetchTask();
  }

  fetchTask() {
    this.taskService.getOne(this.idToEdit).subscribe((taskObj) => {
      this.task = taskObj;
      // console.log(this.task);
    });
  }

  takeItHandler(): void {
    if (!this.editTaskForm) return;

    const form = this.editTaskForm;

    if (form.invalid) {
      return
    }

    const value: { taskName: string; taskDescr: string } = form.value;
    console.log(`TakeIt: id: ${this.idToEdit}`, value);
    form.setValue({ taskName: '', taskDescr: '' })
  }

  editHandler(): void {
    if (!this.editTaskForm) return;

    const form = this.editTaskForm;

    if (form.invalid) {
      return
    }

    const value: { taskName: string; taskDescr: string } = form.value;
    console.log(`Edit: id: ${this.idToEdit}`, value);
    form.setValue({ taskName: '', taskDescr: '' })
  }

  deleteHandler(): void {
    if (!this.editTaskForm) return;

    const form = this.editTaskForm;

    if (form.invalid) {
      return
    }

    const value: { taskName: string; taskDescr: string } = form.value;
    console.log(`Delete: id: ${this.idToEdit}`, value);
    form.setValue({ taskName: '', taskDescr: '' })
  }

}
