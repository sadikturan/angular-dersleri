import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
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
  model: any = {
    categoryId: ''
  };

  constructor(private categoryService: CategoryService,
              private movieService: MovieService,
              private router: Router,
              private alertify: AlertifyService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  movieForm = new FormGroup({
    title: new FormControl("", [Validators.required, Validators.minLength(5)]),
    description: new FormControl("", [Validators.required]),
    imageUrl: new FormControl("", [Validators.required]),
    categoryId: new FormControl("", [Validators.required])
  })

  get title(){
    return this.movieForm.get("title");
  }


  clearForm() {
    this.movieForm.patchValue({
      title: '',
      description: '',
      imageUrl: '',
      categoryId: ''
    });
  }

  createMovie() {

    console.log(this.movieForm);
    console.log(this.movieForm.value);
    console.log(this.movieForm.value.title);

    // const movie = {
    //   id: 0,
    //   title: this.model.title,
    //   description:  this.model.description,
    //   imageUrl: this.model.imageUrl,
    //   isPopular: false,
    //   datePublished: new Date().getTime(),
    //   categoryId: this.model.categoryId
    // };


    // this.movieService.createMovie(movie).subscribe(data =>
    //   this.router.navigate(['/movies', data.id])
    // );

  }

  log(value: any) {
    console.log(value);
  }

}
