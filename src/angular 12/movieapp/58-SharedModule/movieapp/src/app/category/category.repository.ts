import { Category } from "./category.model";

export class CategoryRepository {
  private categories: Category[];

  constructor() {
    this.categories = [
      {id: 1, name: "macera"},
      {id: 2, name: "romantik"},
      {id: 3, name: "bilim kurgu"},
      {id: 4, name: "komedi"}
    ];
  }

  getCategories(): Category[] {
    return this.categories;
  }
}
