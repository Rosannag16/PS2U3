import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/models/todos.interface';
import { TodoService } from 'src/app/service/todo.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-completate',
  templateUrl: './completate.component.html',
  styleUrls: ['./completate.component.scss'],
})
export class CompletateComponent implements OnInit {
  completedTodos: Todos[] = [];
  users: any[] = [];

  constructor(
    private todoSrv: TodoService,
    private userSrv: UsersService
  ) {}

  ngOnInit(): void {
    this.completedTodos = this.todoSrv.getTodos().filter(todo => todo.completed);
    this.users = this.userSrv.getUsers();
  }

  async toggleCompletion(todo: Todos, event: any): Promise<void> {
    const isChecked: boolean = event.target.checked;
    try {
      todo.completed = isChecked;
      this.todoSrv.updateTodo(todo.id, todo);
    } catch (error) {
      console.error("Errore nell'aggiornamento dello stato del task:", error);
      todo.completed = !todo.completed;
    }
  }
  
}

