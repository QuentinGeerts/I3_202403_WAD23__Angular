import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addition'
})
export class AdditionPipe implements PipeTransform {

  transform(initialValue: number, ...args: number[]): number {
    return initialValue + args.reduce((acc, value) => acc + value);
  }

}
