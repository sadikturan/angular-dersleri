import { Component } from '@angular/core';

@Component({
  selector: 'app',
  // templateUrl: './app.component.html',
  template: `
    <h1>app component</h1>
    <h2>{{ title }}</h2>
    <h2>{{ getTitle() }}</h2>
    <p>
      {{ todoItem.description }}
      {{ todoItem.action }}
    </p>
  `,
  styleUrls: ['./app.component.css']
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
