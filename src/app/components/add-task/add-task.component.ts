import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  @ViewChild('addTaskForm') addTaskForm: NgForm | undefined;

  addSubmitHandler(): void {
    if (!this.addTaskForm) return;

    const form = this.addTaskForm;

    if (form.invalid) {
      return
    }

    const value: { taskName: string; taskDescr: string } = form.value;
    // console.log(value);
    form.setValue({ taskName: '', taskDescr: '' })
  }
}
