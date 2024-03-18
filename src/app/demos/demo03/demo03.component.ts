import { Component } from '@angular/core';

@Component({
  selector: 'app-demo03',
  templateUrl: './demo03.component.html',
  styleUrl: './demo03.component.scss'
})
export class Demo03Component {

  // 1er exemple
  compteur: number = 0;

  increase(): void {
    this.compteur++;
  }

  decrease() {
    this.compteur--;
  }


  // 2e exemple
  firstname: string = "";
  lastname: string = "";

  sendInfo(event: SubmitEvent) {
    console.log(event)
    console.log(this.firstname)
    console.log(this.lastname)
  }

}
