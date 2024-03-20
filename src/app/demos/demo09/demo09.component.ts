import { Component } from '@angular/core';
import { Stagiaire } from './stagiaire';

@Component({
  selector: 'app-demo09',
  templateUrl: './demo09.component.html',
  styleUrl: './demo09.component.scss'
})
export class Demo09Component {

  stagiaires: string[] = ['Hanane', 'Emanuela', 'Elena', 'Najoua', 'Vitória', 'Senem', 'Margot', 'Laurence', 'Dorine', 'Hélêne', 'Yusrâ', 'Hsin-I']

  stagiaires2: Stagiaire[] = [
    { lastname: 'Geerts', firstname: 'Quentin' }
  ]

  isVisible: boolean = false;

  color: string = "red";

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

}
