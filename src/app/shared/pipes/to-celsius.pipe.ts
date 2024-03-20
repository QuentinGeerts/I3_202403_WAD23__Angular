import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toCelsius'
})
export class ToCelsiusPipe implements PipeTransform {

  transform(value: number): number {
    // (50 °F − 32) × 5/9 = 10 °C
    return (value - 32) * 5 / 9;
  }

}
