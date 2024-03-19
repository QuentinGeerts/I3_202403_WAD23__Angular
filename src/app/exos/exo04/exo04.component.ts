import { Component } from '@angular/core';

@Component({
  selector: 'app-exo04',
  templateUrl: './exo04.component.html',
  styleUrl: './exo04.component.scss'
})
export class Exo04Component {

  inputType: string = "password";


  togglePassword() {
    this.inputType = this.inputType === "password" ? "text" : "password";
  }

}
