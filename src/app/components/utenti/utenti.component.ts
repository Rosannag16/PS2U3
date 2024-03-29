import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/service/users.service';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-utenti',
  templateUrl: './utenti.component.html',
  styleUrls: ['./utenti.component.scss'],
})
export class UtentiComponent implements OnInit {
  users: any[] = [];
  filterText: string = '';

  constructor(
    private userSrv: UsersService,
    private todoService: TodoService
  ) {}

  ngOnInit(): void {
    this.users = this.userSrv.getUsers();

    this.users.forEach((user) => {
      user.todos = this.todoService
        .getTodos()
        .filter((todo) => todo.userId === user.id);
    });
  }

  get filteredUsers(): any[] {
    return this.users.filter((user) => {
      const fullName = `${user.firstName} ${user.lastName}`;
      return fullName.toLowerCase().includes(this.filterText.toLowerCase());
    });
  }
}
