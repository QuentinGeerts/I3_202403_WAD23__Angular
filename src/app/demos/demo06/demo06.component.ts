import { Component } from '@angular/core';

@Component({
  selector: 'app-demo06',
  templateUrl: './demo06.component.html',
  styleUrl: './demo06.component.scss'
})
export class Demo06Component {

  today: Date = new Date();

  quentin: { nom: string, prenom: string } = { nom: 'Geerts', prenom: 'Quentin' };

}
