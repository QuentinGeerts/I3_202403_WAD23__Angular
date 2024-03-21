import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-output',
  templateUrl: './child-output.component.html',
  styleUrl: './child-output.component.scss'
})
export class ChildOutputComponent {
  
  @Output()
  emitToParent: EventEmitter<string> = new EventEmitter();

  message: string = "Voici le message qui provient de l'enfant.";
  
  onEmit() {
    this.emitToParent.emit(this.message);
  }

}
