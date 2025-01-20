import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  declarations: [
    AppComponent,       // Root Component
    TaskFormComponent,  // Task Form Component
    TaskListComponent,  // Task List Component
  ],
  imports: [
    BrowserModule,      // Required for browser apps
    CommonModule,       // Required for directives like *ngIf and *ngFor
    FormsModule,        // Required for [(ngModel)]
  ],
  bootstrap: [AppComponent], // Bootstraps the root AppComponent
})
export class AppModule {}
