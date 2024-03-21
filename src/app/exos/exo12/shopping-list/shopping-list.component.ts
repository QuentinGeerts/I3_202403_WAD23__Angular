import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.scss'
})
export class ShoppingListComponent implements OnInit {
  
  @Input() products!: Product[];
  @Output() removeEmitter: EventEmitter<number> = new EventEmitter();
  @Output() decreaseEmitter: EventEmitter<number> = new EventEmitter();
  @Output() increaseEmitter: EventEmitter<number> = new EventEmitter();

  ngOnInit(): void {
    
  }


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
