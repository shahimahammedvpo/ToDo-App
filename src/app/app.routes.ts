import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { ViewTaskComponent } from './view-task/view-task.component';

export const routes: Routes = [
    { path: '', redirectTo: 'tasks', pathMatch: 'full' },
  { path: 'tasks', component: TaskListComponent },
  { path: 'add', component: AddTaskComponent },
  { path: 'tasks/:id', component: ViewTaskComponent },
  { path: '**', redirectTo: 'tasks' }
];
