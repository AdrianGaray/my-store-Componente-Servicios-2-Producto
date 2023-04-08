import { Component } from '@angular/core';
import { Product } from '../../models/product.model'; //importamos el modelo Product
// importar el servicio store.
import { StoreService } from '../../services/store.service';

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

  // hacemos la inyeccion de dependencia de store.service
  // podemos hacer uso del servicio StoreService, dentro del componente
  constructor(private storeService: StoreService) {
    // obtenemos la lista actual de elementos q estan en el carrito de compras
    this.myShoppingCart = this.storeService.getShoppingCart();
   }

  // este evento es el q escucha. Y recibimos ese producto
  onAddToShoppingCart(product: Product) {
    console.log(product);

    // hacemos uso de los metodos del servicio
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

}
