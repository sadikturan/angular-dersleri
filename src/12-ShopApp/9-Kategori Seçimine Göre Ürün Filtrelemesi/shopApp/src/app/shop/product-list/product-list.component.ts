import { Component, OnInit, Input } from '@angular/core'; 
import { Product } from 'src/app/model/product.model';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() data: Product[];
  constructor() { }

  ngOnInit() {
  }

}
