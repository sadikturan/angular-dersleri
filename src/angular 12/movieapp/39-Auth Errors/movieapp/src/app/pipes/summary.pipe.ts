import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'summary'
  })
export class SummaryPipe implements PipeTransform {

  transform(value: string, limit?: number) {
    if(!value) return null;

    limit = limit? limit:20;

    if(limit > value.length) {
      return value;
    }

    return value.substring(0, limit) + '...';
  }

}
