import { Injectable } from '@angular/core';
// importar HttpClient
import { HttpClient } from '@angular/common/http';
// importar Product
import { Product } from './../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // Inyectar e servicio en el constructor.
  constructor(private http: HttpClient)
  {

  }

  getAllProducts(){
    // tipamos la respuesta a array Product
    // le deicmos que devuelva un array de produc
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }
}
