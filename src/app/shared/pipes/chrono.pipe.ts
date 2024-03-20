import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chrono'
})
export class ChronoPipe implements PipeTransform {

  transform(value: number): string {

    let minutes = Math.floor( value / 60 );
    let seconds = value % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds < 10 ? '0' + seconds : seconds}`;
  }

}
