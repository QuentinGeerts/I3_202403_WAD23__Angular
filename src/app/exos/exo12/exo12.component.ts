import { Component, OnInit } from '@angular/core';
import { ShoppingService } from './services/shopping.service';
import { Product } from './models/product';

@Component({
  selector: 'app-exo12',
  templateUrl: './exo12.component.html',
  styleUrl: './exo12.component.scss'
})
export class Exo12Component implements OnInit {

  products!: Product[];
  productName: string = "";
  productQuantity: number = 1;

  constructor(private _shoppingService: ShoppingService) { }

  ngOnInit(): void {
    this.products = this._shoppingService.getProducts();
  }

  addProduct() {
    const product: Product = { name: this.productName, quantity: this.productQuantity };

    if (product.name === "" || product.quantity < 1) return;


    let index = this.products.findIndex(p => p.name.toLowerCase() === product.name.toLowerCase());

    console.log(index);
    

    if (index !== -1) {
      this._shoppingService.increaseQuantity(index);
    }
    else {
      this._shoppingService.addProduct(product);
    }
  }

  decreaseQuantity(index: number) {
    this._shoppingService.decreaseQuantity(index);
  }
  increaseQuantity(index: number) {
    this._shoppingService.increaseQuantity(index);
  }
  removeProduct(index: number) {
    this._shoppingService.removeProduct(index);
  }

}
