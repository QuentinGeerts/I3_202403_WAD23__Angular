import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToDHMS'
})
export class SecondsToDHMSPipe implements PipeTransform {

  transform(value: number): string {

    const initialValue = value;
    
    let days = Math.floor(value / 86_400);
    value = value - days * 86_400;

    let hours = Math.floor(value / 3_600);
    value = value - hours * 3_600;

    let minutes = Math.floor(value / 60);
    value = value - minutes * 60;

    let seconds = value;

    // 90 061 correspondant à 1 jour, 1 heure, 1 minute et 1 seconde.
    
    return `${initialValue} correspondant à ${days} jour, ${hours} heure, ${minutes} minute et ${seconds} seconde.`;
  }

}
