import { Component } from '@angular/core';
import { Article } from '../exo09/article';

@Component({
  selector: 'app-exo11',
  templateUrl: './exo11.component.html',
  styleUrl: './exo11.component.scss'
})
export class Exo11Component {
  
  articles: Article[] = []

  productName: any;
  productQuantity: any;
  
  AddProduct() {

    let article: Article = {
      name: this.productName,
      quantity: this.productQuantity,
      dateAdd: new Date()
    };

    if (article.name === "" || article.quantity < 1) return;

    // Vérifier si le produit existe déjà dans la liste
    // => Incrémentation de la quantité

    let product = this.articles.find(a => a.name.toLowerCase() === article.name.toLowerCase());
    if (product) {
      product.quantity++;
    }
    else {
      this.articles.push(article);
    }
  }

  removeProduct(index: number) {
    this.articles.splice(index, 1);
  }

  decreaseQuantity(index: number) {
    this.articles[index].quantity--;

    if (this.articles[index].quantity === 0) this.removeProduct(index);
  }

  increaseQuantity(index: number) {
    this.articles[index].quantity++;
  }

}
