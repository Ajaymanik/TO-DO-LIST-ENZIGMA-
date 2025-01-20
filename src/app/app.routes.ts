import { Routes } from '@angular/router';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' }, // Redirect to the task list by default
  { path: 'tasks', component: TaskListComponent }, // Route to Task List
  { path: 'add-task', component: TaskFormComponent }, // Route to Add Task Form
  { path: 'edit-task/:id', component: TaskFormComponent }, // Route to Edit Task Form
];
