import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Task } from 'src/app/types/Task';

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

  @ViewChild('addTaskForm') addTaskForm: NgForm | undefined;

  addSubmitHandler(): void {
    if (!this.addTaskForm) return;

    const form = this.addTaskForm;

    if (form.invalid) {
      return
    }

    const value: { taskName: string; taskDescr: string } = form.value;
    // console.log(value);
    this.taskData = { ...this.taskData, name: value.taskName, description: value.taskDescr }
    form.setValue({ taskName: '', taskDescr: '' })
  }
}
