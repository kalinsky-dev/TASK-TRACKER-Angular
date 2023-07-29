import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.css']
})

export class TaskDeleteComponent implements OnInit {

  idToDel!: string;

  constructor(private activeRoute: ActivatedRoute, private router: Router, private taskService: TaskService) { }

  ngOnInit(): void {
    this.idToDel = this.activeRoute.snapshot.params['taskId']
  }

  onDeleteHandler() {
    // console.log(this.idToDel);
    // this.router.navigate([`/`])
    // ToDo: for now I do not handle the data from the server!

    this.taskService.remove(this.idToDel).subscribe(() => {
      this.router.navigate(['/tasks']);
    })
  }
}
