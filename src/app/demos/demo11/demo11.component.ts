import { Component } from '@angular/core';

@Component({
  selector: 'app-demo11',
  templateUrl: './demo11.component.html',
  styleUrl: './demo11.component.scss'
})
export class Demo11Component {


  datas: any[] = [
    { lastname: 'Geerts', firstname: 'Quentin' },
    { lastname: 'Geerts', firstname: 'Quentin' },
    { lastname: 'Geerts', firstname: 'Quentin' },
    { lastname: 'Geerts', firstname: 'Quentin' },
    { lastname: 'Geerts', firstname: 'Quentin' },
    { lastname: 'Geerts', firstname: 'Quentin' },
    { lastname: 'Geerts', firstname: 'Quentin' },
  ]

  message: string = "Coucou venant du parent.";
  color: string = "#ffffff";
  messageFromChild!: string;

  changeColor() {
    this.color = "#123456"
  }

  receiveEmit(message: string) {
    this.messageFromChild = message;
  }

}
