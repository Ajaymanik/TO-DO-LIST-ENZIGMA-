import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnChanges {
  @Input() editTaskData: { id: number; title: string; description: string } | null = null;
  @Output() taskUpdated = new EventEmitter<void>();

  title: string = '';
  description: string = '';

  constructor(private taskService: TaskService) {}

  // Detect changes to the editTaskData input
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['editTaskData'] && this.editTaskData) {
      this.title = this.editTaskData.title;
      this.description = this.editTaskData.description;
    }
  }

  // Save the task (add or edit)
  saveTask(): void {
    if (this.editTaskData) {
      // Edit existing task
      this.taskService.editTask(this.editTaskData.id, this.title, this.description);
    } else {
      // Add new task
      this.taskService.addTask(this.title, this.description);
    }

    // Emit the taskUpdated event to notify the parent component
    this.taskUpdated.emit();

    // Reset the form
    this.resetForm();
  }

  // Reset the form fields
  resetForm(): void {
    this.title = '';
    this.description = '';
    this.editTaskData = null;
  }
}
