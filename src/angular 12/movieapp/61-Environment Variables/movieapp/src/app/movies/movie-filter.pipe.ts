import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from './movie.model';

@Pipe({
  name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {

  transform(movies: Movie[], filterText: string): Movie[] {
    filterText = filterText.toLowerCase();

    return filterText? movies.filter((m: Movie) =>
      m.title.toLowerCase().indexOf(filterText) !== -1 || m.description.toLowerCase().indexOf(filterText) !== -1): movies;


  }

}
