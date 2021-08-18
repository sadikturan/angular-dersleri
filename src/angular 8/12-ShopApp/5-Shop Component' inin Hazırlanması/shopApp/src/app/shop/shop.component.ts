import { Component } from "@angular/core";
import { ProductRepository } from '../model/product.repository';
import { CategoryRepository } from '../model/category.repository';
import { Product } from '../model/product.model';
import { Category } from '../model/category.model';

@Component({
    selector: 'shop',
    templateUrl: 'shop.component.html'
})
export class ShopComponent {
    constructor(
        private productRepository: ProductRepository,
        private categoryRepository: CategoryRepository) {}

    get products(): Product[] {
        return this.productRepository.getProducts();
    }

    get categories(): Category[] {
        return this.categoryRepository.getCategories();
    }
}