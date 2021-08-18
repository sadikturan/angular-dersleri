import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css'],
  providers: [CategoryService]
})
export class CategoryCreateComponent implements OnInit {

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
  }

  createCategory(name: string) {
    const category: Category = {
      name: name
    }

    this.categoryService.createCategory(category).subscribe(data => {
      console.log(data);
      this.router.navigate(['/']);
    });
    
  }

}
