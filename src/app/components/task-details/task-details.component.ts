import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';
import { Task } from 'src/app/types/Task';
import { User } from 'src/app/types/User';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})

export class TaskDetailsComponent implements OnInit {

  idToEdit!: string;
  task!: Task | undefined;
  user!: User;

  ifOwner!: boolean | undefined;
  inProgress!: boolean | undefined;
  hoursOfWork!: number | false | undefined;
  takenByUser!: string | false | undefined;
  isFinished!: boolean | undefined;
  description!: string | undefined;
  name!: string | undefined;

  constructor(private taskService: TaskService, private userService: UserService,
    private activeRoute: ActivatedRoute, private router: Router) { }

  @ViewChild('editTaskForm') editTaskForm: NgForm | undefined;

  ngOnInit(): void {
    this.idToEdit = this.activeRoute.snapshot.params['taskId'];
    this.fetchTaskAndSetProps();
  }

  fetchTaskAndSetProps() {
    this.taskService.getOne(this.idToEdit).subscribe((taskObj) => {
      this.task = taskObj;
      this.user = this.userService.user!;
      this.propertiesSetter();
    });
  }

  propertiesSetter() {
    this.ifOwner = this.user.email == this.task?.owner;
    this.inProgress = this.task?.inProgress;
    this.hoursOfWork = this.task?.hoursOfWork;
    this.takenByUser = this.task?.takenByUser;
    this.isFinished = this.task?.isFinished;
    this.description = this.task?.description;
    this.name = this.task?.name;
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

  finishItHandler(): void {

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
