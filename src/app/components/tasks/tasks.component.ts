import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/types/Task';
// import { TASKS } from 'src/app/mock-tasks';
import { TaskService } from 'src/app/services/task.service';
import { User } from 'src/app/types/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})

export class TasksComponent implements OnInit {

  tasks: Task[] = [];
  user!: User;

  constructor(private taskService: TaskService, private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.user!;
    this.taskService.getAll()
      .subscribe((tasksArr) => { this.tasks = tasksArr });
  }

  sortHandler() {
    // console.log('Sort');
    const hasFinishedTask = this.tasks.find(x => x.hoursOfWork !== 0)

    if (!hasFinishedTask) {
      return;
    } else {
      let sortedTasks = this.tasks.sort((a: Task, b: Task): number => {
        if (a.hoursOfWork === Number(0)) {
          return 1;
        };
        if (b.hoursOfWork === Number(0)) {
          return -1;
        };
        return Number(a.hoursOfWork) - Number(b.hoursOfWork);
      });
      // Return different ref form the tasks array
      this.tasks = sortedTasks;
    }
  }
}
