import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.css']
})

export class TaskDeleteComponent implements OnInit {
  
  idToDel!: string;

  constructor(private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.idToDel = this.activeRoute.snapshot.params['taskId']
  }

  onDeleteHandler() {
    console.log(this.idToDel);
    this.router.navigate([`/`])
  }
}
