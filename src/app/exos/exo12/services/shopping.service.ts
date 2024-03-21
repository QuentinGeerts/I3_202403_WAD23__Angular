import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private _products: Product[] = [
    { name: 'Sel', quantity: 2 },
    { name: 'Poivre', quantity: 1 },
    { name: 'Sucre', quantity: 5 },
  ]

  constructor() { }

  getProducts (): Product[] {
    return this._products;
  }

  addProduct(product: Product) {
    this._products.push(product);
  }

  removeProduct(index: number) {
    this._products.splice(index, 1);
  }

  decreaseQuantity(index: number) {
    this._products[index].quantity--;

    if (this._products[index].quantity === 0) this.removeProduct(index);
  }

  increaseQuantity(index: number) {
    this._products[index].quantity++;
  }
}
