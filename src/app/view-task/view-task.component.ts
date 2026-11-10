import { Component,inject,OnInit } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormsModule } from '@angular/forms';
import { Router,RouterLink,ActivatedRoute } from '@angular/router';
import { Task } from '../models/task';
@Component({
  selector: 'app-view-task',
  standalone: true,
  imports: [FormsModule,RouterLink],
  templateUrl: './view-task.component.html',
  styleUrl: './view-task.component.css'
})
export class ViewTaskComponent implements OnInit {
private route = inject(ActivatedRoute);
  private router = inject(Router);
  private todoService = inject(TodoService);

  task?: Task;
  title = '';
  description = '';

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.task = this.todoService.getTask(id);

    if (this.task) {
      this.title = this.task.title;
      this.description = this.task.description;
    }
  }

  updateTask() {
    if (!this.task || !this.title.trim()) {
      return;
    }

    this.todoService.updateTask({
      ...this.task,
      title: this.title.trim(),
      description: this.description.trim()
    });

    this.router.navigate(['/tasks']);
  }
}
