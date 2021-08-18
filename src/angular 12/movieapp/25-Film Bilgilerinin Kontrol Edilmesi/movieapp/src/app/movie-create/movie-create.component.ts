import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../models/category';
import { AlertifyService } from '../services/alertify.service';
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
              private router: Router,
              private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  createMovie(title: any, description: any, imageUrl: any, categoryId: any) {

    if(title.value === "" || description.value === "" || imageUrl.value === "" || categoryId.value === "-1") {
      this.alertify.error("tüm alanları doldurmalısınız");
      return;
    }

    if(title.value.length < 5) {
      this.alertify.error("title için min. 5 karakter girmelisiniz");
      return;
    }

    if(description.value.length < 10 || description.value.length > 50) {
      this.alertify.error("description için 10-50 karakter aralığında değer girmelisiniz");
      return;
    }

    const extensions = ["jpeg","jpg","png"];
    const extension = imageUrl.value.split('.').pop();

    if(extensions.indexOf(extension) === -1) {
      this.alertify.error("sadece 'jpeg,'jpg','png' resimleri ekleyebilirsiniz");
      return;
    }

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
