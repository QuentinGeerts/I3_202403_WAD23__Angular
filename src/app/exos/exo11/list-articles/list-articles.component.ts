import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Article } from '../../exo09/article';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrl: './list-articles.component.scss'
})
export class ListArticlesComponent {

  @Input() articlesEnfant!: Article[];
  @Output() removeEmitter: EventEmitter<number> = new EventEmitter();
  @Output() decreaseEmitter: EventEmitter<number> = new EventEmitter();
  @Output() increaseEmitter: EventEmitter<number> = new EventEmitter();

  removeProduct(index: number) {
    this.removeEmitter.emit(index);
  }

  increaseQuantity(index: number) {
    this.increaseEmitter.emit(index);
  }

  decreaseQuantity(index: number) {
    this.decreaseEmitter.emit(index);
  }
}
