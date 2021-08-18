import { Movie } from "./movie";

export class MovieRepository {
  private movies: Movie[];

  constructor() {
    this.movies = [
      {id: 1, title: "film 1", description: "film 1 açıklama", imageUrl: "1.jpeg"},
      {id: 2, title: "film 2", description: "film 2 açıklama", imageUrl: "2.jpeg"},
      {id: 3, title: "film 3", description: "film 3 açıklama", imageUrl: "3.jpeg"},
      {id: 4, title: "film 4", description: "film 4 açıklama", imageUrl: "4.jpeg"},
      {id: 4, title: "film 4", description: "film 4 açıklama", imageUrl: "4.jpeg"},
    ]
  }

  getMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: number): Movie {
    return this.movies.find(i=>i.id==id);
  }
}
