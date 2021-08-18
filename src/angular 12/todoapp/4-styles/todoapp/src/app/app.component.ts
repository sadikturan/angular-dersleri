import { Component } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']
  styles: [
    `
      p {
        color: red;
      }
    `
  ]
})
export class AppComponent {
  title = 'todo app';

  todoItem = {
    description: "kahvaltı",
    action: true
  }

  getTitle() {
    return this.title;
  }
}
