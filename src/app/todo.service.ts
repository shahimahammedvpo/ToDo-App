import { Injectable,signal } from '@angular/core';
import { Task } from './models/task';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
 private tasksSignal = signal<Task[]>(
    JSON.parse(localStorage.getItem('tasks') || '[]')
  );

  tasks = this.tasksSignal.asReadonly();

  private saveTasks(tasks: Task[]) {
    this.tasksSignal.set(tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  addTask(title: string, description: string) {
    const task: Task = {
      id: Date.now(),
      title,
      description,
      completed: false
    };

    this.saveTasks([...this.tasksSignal(), task]);
  }

  getTask(id: number) {
    return this.tasksSignal().find(task => task.id === id);
  }

  updateTask(updatedTask: Task) {
    const tasks = this.tasksSignal().map(task =>
      task.id === updatedTask.id ? updatedTask : task
    );

    this.saveTasks(tasks);
  }

  deleteTask(id: number) {
    const tasks = this.tasksSignal().filter(task => task.id !== id);
    this.saveTasks(tasks);
  }
  
}
