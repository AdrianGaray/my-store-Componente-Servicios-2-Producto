import { Component } from '@angular/core';
import { Product } from './models/product.model'; //importamos el modelo Product

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';

  showImg = true;

  // renderizar una familia de productos
  // se agrega un array de Product
  // creamos una lista de productos
  products: Product[] = [
    {
      id: '1',
      name: 'EL mejor juguete',
      price: 565,
      image: './assets/images/toy.jpg'
    },
    {
      id: '2',
      name: 'Bicicleta casi nueva',
      price: 356,
      image: './assets/images/bike.jpg'
    },
    {
      id: '3',
      name: 'Colleción de albumnes',
      price: 34,
      image: './assets/images/album.jpg'
    },
    {
      id: '4',
      name: 'Mis libros',
      price: 23,
      image: './assets/images/books.jpg'
    },
  ];

  onLoaded(img: string) {
    console.log('log padre', img);
  }

  // con este metodo se cambia de estado
  toggleImg() {
    // si esta en true se cambia false
    // si esta en false se cambia a true
    this.showImg = !this.showImg;
  }
}
