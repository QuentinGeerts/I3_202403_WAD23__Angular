import { Component } from '@angular/core';

@Component({
  selector: 'app-demo04',
  templateUrl: './demo04.component.html',
  styleUrl: './demo04.component.scss'
})
export class Demo04Component {

  srcImage: string = "https://64.media.tumblr.com/387842eab1edd76cae7411f5e6de1ddb/d23045a0fc36e2c2-db/s250x400/d2b52ae979e334d85ec69a8ae096ef0fe68f96cc.png";
  altImage: string = "Photo de Bart Simpson";  



  valueInput: string = "Hello world";

  changeValue (event: Event) {
    // console.log(event);
    const input = event.target as HTMLInputElement;
    this.valueInput = input.value;
    
    // const {value} = event.target as HTMLInputElement;
    // this.valueInput = value;
  }



  minRange: number = 0;
  maxRange: number = 100;
  rangeValue: number = 50;

}
