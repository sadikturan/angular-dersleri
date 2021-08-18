import { Category } from "./category";

export class CategoryRepository {
  private categories: Category[];

  constructor() {
    this.categories = [
      {id: 1, name: "macera"},
      {id: 1, name: "romantik"},
      {id: 1, name: "bilim kurgu"},
      {id: 1, name: "komedi"}
    ];
  }

  getCategories(): Category[] {
    return this.categories;
  }
}
