import { Injectable } from '@angular/core';
import { Product } from '../models/product.model'; //importamos el modelo Product


@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

    // array en vacio
    private myShoppingCart: Product[] = [];

    addProduct(product: Product){
      // se agrega al carrito de compras
      this.myShoppingCart.push(product);
    }

    getShoppingCart(){
      return this.myShoppingCart;
    }

    getTotal(){
      return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
    }
}
