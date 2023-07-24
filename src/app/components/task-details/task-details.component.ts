import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent {

  @ViewChild('editTaskForm') editTaskForm: NgForm | undefined;

  takeItHandler(): void {
    if (!this.editTaskForm) return;

    const form = this.editTaskForm;

    if (form.invalid) {
      return
    }

    const value: { taskName: string; taskDescr: string } = form.value;
    console.log('TakeIt: ', value);
    form.setValue({ taskName: '', taskDescr: '' })
  }

  editHandler(): void {
    if (!this.editTaskForm) return;

    const form = this.editTaskForm;

    if (form.invalid) {
      return
    }

    const value: { taskName: string; taskDescr: string } = form.value;
    console.log('Edit: ', value);
    form.setValue({ taskName: '', taskDescr: '' })
  }

  deleteHandler(): void {
    if (!this.editTaskForm) return;

    const form = this.editTaskForm;

    if (form.invalid) {
      return
    }

    const value: { taskName: string; taskDescr: string } = form.value;
    console.log('Delete: ', value);
    form.setValue({ taskName: '', taskDescr: '' })
  }

}
