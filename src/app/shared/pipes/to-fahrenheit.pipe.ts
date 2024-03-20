import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toFahrenheit'
})
export class ToFahrenheitPipe implements PipeTransform {

  transform(value: number): number {
    // (50 °C × 9/5) + 32 = 122 °F
    return (value * 9 / 5) + 32;
  }

}
