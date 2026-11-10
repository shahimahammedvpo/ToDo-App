import { Component,inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
todoService = inject(TodoService);

  deleteTask(id: number) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.todoService.deleteTask(id);
    }
  }

  toggleTask(id: number, completed: boolean) {
    const task = this.todoService.getTask(id);

    if (task) {
      this.todoService.updateTask({
        ...task,
        completed
      });
    }
  }
}
