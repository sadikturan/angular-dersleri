import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css'],
  providers: [CategoryService, MovieService]
})
export class MovieCreateComponent implements OnInit {

  categories: Category[];

  constructor(private categoryService: CategoryService,
              private movieService: MovieService,
              private router: Router) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  createMovie(title: any, description: any, imageUrl: any, categoryId: any) {

    const movie = {
      id: 0,
      title: title.value,
      description:  description.value,
      imageUrl: imageUrl.value,
      isPopular: false,
      datePublished: new Date().getTime(),
      categoryId: categoryId.value
    };


    this.movieService.createMovie(movie).subscribe(data =>
      this.router.navigate(['/movies', data.id])
    );

  }

}
