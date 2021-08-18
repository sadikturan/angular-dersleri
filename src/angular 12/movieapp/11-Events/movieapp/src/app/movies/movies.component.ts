import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { MovieRepository } from '../models/movie.repository';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  title = "Film Listesi";
  movies: Movie[];
  FilteredMovies: Movie[];
  movieRepository: MovieRepository;

  filterText: string = "";

  constructor() {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    this.FilteredMovies = this.movies;
  }

  ngOnInit(): void {
  }

  onInputChange() {
    this.FilteredMovies = this.filterText?
      this.movies.filter(m=> m.title.indexOf(this.filterText) !== -1 ||
                         m.description.indexOf(this.filterText) !== -1): this.movies
  }





}
