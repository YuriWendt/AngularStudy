import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public todos: Todo[] = [];
  public title: string = "Account";

  constructor() {
    this.todos.push(new Todo(1, 'login', false));
    this.todos.push(new Todo(2, 'password', false));
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  markAsDone(todo: Todo) {
    todo.done = true;
  }

  markAsUndone(todo: Todo) {
    todo.done = false;
  }

  getBackground(){
    return "url('https://image.freepik.com/free-vector/gradient-dynamic-blue-lines-background_23-2148995756.jpg')"
  }
}
