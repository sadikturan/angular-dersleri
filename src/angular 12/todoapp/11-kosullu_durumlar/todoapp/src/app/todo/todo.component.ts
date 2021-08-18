import { Component, OnInit } from '@angular/core';
import { Model } from '../model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {

  displayAll: boolean = false;

  constructor() { }

  model = new Model();

  message: string = "merhaba";

  addItem(value: string) {
    if(value!="") {
      this.model.items.push({ description: value, action: false});
    } else {
      alert("bilgi giriniz");
    }
  }

  getName() {
    return this.model.name;
  }

  getItems() {
    if(this.displayAll) {
      return this.model.items;
    }
    return this.model.items.filter(item => !item.action);
  }

}
