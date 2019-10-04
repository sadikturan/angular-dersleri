import { Component, OnInit, Input } from '@angular/core';
import { Category } from 'src/app/model/category.model';

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  @Input() data: Category[];
  constructor() { }

  ngOnInit() {
  }

}
