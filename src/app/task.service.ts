import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks: { id: number; title: string; description: string }[] = [];

  constructor() {}

  getTasks() {
    return this.tasks;
  }

  addTask(title: string, description: string) {
    const newTask = {
      id: this.tasks.length + 1,
      title,
      description,
    };
    this.tasks.push(newTask);
  }

  editTask(id: number, updatedTitle: string, updatedDescription: string) {
    const taskIndex = this.tasks.findIndex((task) => task.id === id);
    if (taskIndex !== -1) {
      this.tasks[taskIndex].title = updatedTitle;
      this.tasks[taskIndex].description = updatedDescription;
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }
}
