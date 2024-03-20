import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exo08',
  templateUrl: './exo08.component.html',
  styleUrl: './exo08.component.scss'
})
export class Exo08Component implements OnInit {
  
  styles!: any;

  // Propriétés du quadrilatère
  height: number = 50;
  width: number = 50;
  color: string = '#FFFFFF';
  borderColor: string = '#000000';
  borderWidth: number = 1;
  borderStyle: string = 'solid';


  // Cercle
  isCircle: boolean = false;

  update () {
    this.styles = {
      height: this.height + "px",
      width: this.width + "px",
      backgroundColor: this.color,
      borderColor: this.borderColor,
      borderWidth: this.borderWidth + "px",
      borderStyle: this.borderStyle
    }
  }

  ngOnInit(): void {
    this.update();
  }

}
