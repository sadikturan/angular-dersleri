import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories = ["macera","romantik","bilim kurgu","komedi"];

  constructor() { }

  ngOnInit(): void {
  }

}
