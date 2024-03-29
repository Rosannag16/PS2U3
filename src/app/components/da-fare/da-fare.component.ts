import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/models/todos.interface';
import { TodoService } from 'src/app/service/todo.service';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-da-fare',
  templateUrl: './da-fare.component.html',
  styleUrls: ['./da-fare.component.scss'],
})
export class DaFareComponent implements OnInit {
  todos: Todos[] = [];
  users: any[] = [];

  constructor(
    private todoSrv: TodoService,
    private userSrv: UsersService
  ) {}

  ngOnInit(): void {
    this.todos = this.todoSrv.getTodos().filter(todo => !todo.completed);
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
