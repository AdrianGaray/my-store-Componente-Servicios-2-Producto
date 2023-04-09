import { Injectable } from '@angular/core';
import { Product } from '../models/product.model'; //importamos el modelo Product
import { BehaviorSubject } from 'rxjs'; // rxjs es el q implementa el patron obserbavle


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

    // array en vacio
    private myShoppingCart: Product[] = [];

    // este BehaviorSubject tiene un array de Product, es lo q queremos trasmitir
    private myCart = new BehaviorSubject<Product[]>([]);

    // generamos un suscriptor
    // lo utlilizamo para crear el patron Observable, tiene q ver con excuchar cambios
    myCart$ = this.myCart.asObservable();

    addProduct(product: Product){
      // se agrega al carrito de compras
      this.myShoppingCart.push(product);

      // cada vez q agregemo un producto quiero notificar a los q esten suscripto a ese observador, recibiran la notificacion
      // envia notificacion a los q estan suscripto
      // vamos a trasmitir el estado de array de Productos
      this.myCart.next(this.myShoppingCart);
    }

    getShoppingCart(){
      return this.myShoppingCart;
    }

    getTotal(){
      return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
    }
}
