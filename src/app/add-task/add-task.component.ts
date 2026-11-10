import { Component,inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todo.service';
@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
 private todoService = inject(TodoService);
  private router = inject(Router);

  title = '';
  description = '';

  addTask() {
    if (!this.title.trim()) {
      return;
    }

    this.todoService.addTask(
      this.title.trim(),
      this.description.trim()
    );

    this.router.navigate(['/tasks']);
  }
}
