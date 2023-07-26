import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LogoutComponent } from './components/logout/logout.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { TaskDeleteComponent } from './components/task-delete/task-delete.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthActivate } from './guards/auth.activate';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'logout', component: LogoutComponent,
    canActivate: [AuthActivate]
  },
  {
    path: 'tasks', component: TasksComponent,
    canActivate: [AuthActivate]
  },
  {
    path: 'create-task', component: AddTaskComponent,
    canActivate: [AuthActivate]
  },
  {
    path: 'tasks/:taskId', component: TaskDetailsComponent,
    canActivate: [AuthActivate]
  },
  {
    path: 'tasks/:taskId/delete', component: TaskDeleteComponent,
    canActivate: [AuthActivate]
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: '**', component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
