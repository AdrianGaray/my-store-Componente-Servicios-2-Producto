import { Component } from '@angular/core';
import { Product } from '../../models/product.model'; //importamos el modelo Product

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
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

  // array en vacio
  myShoppingCart: Product[] = [];
  total = 0;

  // este evento es el q escucha. Y recibimos ese producto
  onAddToShoppingCart(product: Product) {
    console.log(product);

    // se agrega al carrito de compras
    this.myShoppingCart.push(product);

    // recorremos el array de myShoppingCart y acumulamos el precio
    this.total = this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }

}
