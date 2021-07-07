import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  todoValue: string = 'Coding';
  todoCompleted: boolean = true;
  todoEdit: boolean = false;
  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.todoCompleted = !this.todoCompleted;
  }

  handleTodoEdit() {
    this.todoEdit = !this.todoEdit;
  }
}
