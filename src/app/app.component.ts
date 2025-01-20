import { Component } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedTask: { id: number; title: string; description: string } | null = null;

  constructor(private taskService: TaskService) {}

  /**
   * Handle the task data sent from TaskListComponent for editing.
   * @param task - Task data to be edited.
   */
  handleEditTask(task: { id: number; title: string; description: string }): void {
    this.selectedTask = { ...task }; // Copy task data to avoid direct reference.
  }

  /**
   * Refresh the task list after adding, editing, or deleting a task.
   * This method can trigger reloading data if needed.
   */
  refreshTaskList(): void {
    this.selectedTask = null; // Reset selected task after updating the list.
  }
}
