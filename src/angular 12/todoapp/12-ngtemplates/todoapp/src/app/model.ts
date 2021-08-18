import { TodoItem } from "./todoitem";

export class Model {
  name: string;
  items: TodoItem[];

  constructor() {
    this.name ="Sadık";
    this.items = [
      { description: "kahvaltı", action: true },
      { description: "spor", action: true },
      { description: "alışveriş", action: false }
    ];
  }
}
