import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from 'src/app/services/task.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})

export class AddTaskComponent {

  taskData = {
    name: '',
    description: '',
    owner: '',
    inProgress: false,
    takenByUser: false,
    hoursOfWork: 0,
    isFinished: false,
  };

  constructor(private taskService: TaskService, private userService: UserService, private router: Router) { }

  @ViewChild('addTaskForm') addTaskForm: NgForm | undefined;

  addSubmitHandler(): void {
    if (!this.addTaskForm) return;

    const form = this.addTaskForm;

    if (form.invalid) {
      return
    }

    const value: { taskName: string; taskDescr: string } = form.value;
    const owner = this.userService.user!.email;
    // console.log(value);
    this.taskData = { ...this.taskData, name: value.taskName, description: value.taskDescr, owner: owner }
    this.taskService.create(this.taskData).subscribe(() => {
      form.setValue({ taskName: '', taskDescr: '' })
      this.router.navigate(['/tasks'])
    })
  }
}
