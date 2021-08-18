import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  constructor() { }

  private name = "Çınar";

  // items = [
  //   "item 1","item 2","item 3","item 4"
  // ];

  items = [
    { id: 1, description: "kahvaltı", action: "yes" },
    { id: 2, description: "spor", action: "yes" },
    { id: 3, description: "alışveriş", action: "no" }
  ];

  getName() {
    return this.name;
  }

}
