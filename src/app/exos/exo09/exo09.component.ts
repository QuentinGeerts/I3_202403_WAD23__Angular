import { Component } from '@angular/core';
import { Article } from './article';

@Component({
  selector: 'app-exo09',
  templateUrl: './exo09.component.html',
  styleUrl: './exo09.component.scss'
})
export class Exo09Component {

  articles: Article[] = [];

  productName: string = "";
  productQuantity: number = 1;

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

  // removeProduct(article: Article) {
  //   this.articles = this.articles.filter(a => a != article);
  // }

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
