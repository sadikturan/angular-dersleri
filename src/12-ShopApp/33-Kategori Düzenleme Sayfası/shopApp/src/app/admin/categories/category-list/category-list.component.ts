import { Component, OnInit } from '@angular/core';
import { CategoryRepository } from 'src/app/model/category.repository';
import { Category } from 'src/app/model/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  constructor(private repository: CategoryRepository) { }

  ngOnInit() {
  }

  getCategories(): Category[] {
    return this.repository.getCategories();
  }

  deleteCategory(category: Category) {
    this.repository.deleteCategory(category);
  }

}
