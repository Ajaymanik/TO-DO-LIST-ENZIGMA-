import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],
})
export class TaskListComponent implements OnInit {
  tasks: { id: number; title: string; description: string }[] = [];
  taskToEdit: { id: number; title: string; description: string } | null = null;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    // Load tasks from the service when the component is initialized
    this.tasks = this.taskService.getTasks();
  }

  // Method to delete a task
  deleteTask(id: number): void {
    this.taskService.deleteTask(id);
    this.refreshTaskList();
  }

  // Method to set a task for editing
  editTask(task: { id: number; title: string; description: string }): void {
    this.taskToEdit = { ...task }; // Pass a copy of the task to avoid mutating the original
  }

  // Method called when a task is added or edited
  onTaskUpdated(): void {
    this.refreshTaskList();
    this.taskToEdit = null; // Reset the editing state
  }

  // Helper method to refresh the task list
  private refreshTaskList(): void {
    this.tasks = this.taskService.getTasks();
  }
}
