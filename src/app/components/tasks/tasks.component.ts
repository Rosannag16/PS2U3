import { Component, OnInit } from '@angular/core';
import { Todos } from 'src/app/models/todos.interface';
import { TodoService } from 'src/app/service/todo.service';

import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  todos: Todos[] = [];
  users: any[] = []; 

  constructor(
    private todoSrv: TodoService,
    private userSrv: UsersService 
  ) {}

  ngOnInit(): void {
    console.log('ngOnInit Attivato');
    this.todos = this.todoSrv.getTodos();
    this.users = this.userSrv.getUsers(); 
  }

  async toggleCompletion(todo: Todos): Promise<void> {
    try {
      todo.completed = !todo.completed;
      this.todoSrv.updateTodo(todo.id, todo);
    } catch (error) {
      console.error("Errore nell'aggiornamento dello stato del task:", error);
      todo.completed = !todo.completed;
    }
  }
}
