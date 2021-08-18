import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  providers: [MovieService]
})
export class MovieDetailsComponent implements OnInit {

  movie: Movie;
  loading: boolean = false;

  constructor(private movieService: MovieService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.loading = true;
      this.movieService.getMovieById(params["movieId"]).subscribe(data => {
        this.movie= data;
        this.loading = false;
      })
    })
  }

}
