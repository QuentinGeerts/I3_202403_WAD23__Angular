import { Component } from '@angular/core';

@Component({
  selector: 'app-demo08',
  templateUrl: './demo08.component.html',
  styleUrl: './demo08.component.scss'
})
export class Demo08Component {

  italic: boolean = false;
  bold: boolean = false;
  size: boolean = false;

  isActive: boolean = false;
  
  currentStyles: any = {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '16px'
  }

  color: string = "red";

  switchItalic() {
    this.italic = !this.italic;
    this.currentStyles.fontStyle = this.italic ? 'italic' : 'normal';
  }

  switchSize() {
    this.size = !this.size;
    this.currentStyles.fontSize = this.size ? '24px' : '16px';
  }
  switchBold() {
    this.bold = !this.bold;
    this.currentStyles.fontWeight = this.bold ? 'bold' : 'normal';
  }

}
