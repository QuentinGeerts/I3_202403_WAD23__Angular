import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempConverter'
})
export class TempConverterPipe implements PipeTransform {

  transform(value: number, unite: string): number {
    switch (unite) {
      case 'celsius':
        return (value - 32) * 5 / 9;
      case 'fahrenheit':
        return (value * 9 / 5) + 32;

      default:
        return value;
    }
  }

}
