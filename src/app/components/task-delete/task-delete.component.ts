import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.css']
})
export class TaskDeleteComponent implements OnInit {

  constructor(private activeRoute: ActivatedRoute) { }
  
  idToDel!: string;

  ngOnInit(): void {
    this.idToDel = this.activeRoute.snapshot.params['taskId']
  }

  onDeleteHandler() {
    console.log(this.idToDel);
  }
}
