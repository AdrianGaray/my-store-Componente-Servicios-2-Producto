import { Component } from '@angular/core';
//importamos el modelo Product
import { Product } from '../../models/product.model';

// importar el servicio store.
import { StoreService } from '../../services/store.service';

// importar el servicio ProductsService, q se encarga de hacer la peticion
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  // inicializa como un array en vacio
  products: Product[] = [];

  // array en vacio
  myShoppingCart: Product[] = [];
  total = 0;
  // manejo de fecha PIPE
  today = new Date();
  date = new Date(2021, 1, 21)

  // hacemos la inyeccion de dependencia de store.service
  // podemos hacer uso del servicio StoreService, dentro del componente
  // hacer inyeccion de dependencia de ProductsService
  // productsService es asincrono, es decir va y hace una peticion a un servicdor, quiere decir que no lo podemos tener de forma instatanea
  // el mejor momento de manejar cosas asincronicas es en el ngOnInit
  constructor(
    private storeService: StoreService,
    private productsService: ProductsService ) {
    // obtenemos la lista actual de elementos q estan en el carrito de compras
    this.myShoppingCart = this.storeService.getShoppingCart();
   }

// Angular por defecto maneja un patrón llamado Observable, así que para obtener esos datos hay q correr una función
// En subscribe ya tenemos la información ya lista que hayamos traído desde la API.
   ngOnInit(): void {
    // traer todos los productos
    this.productsService.getAllProducts()
    .subscribe(data => {
      console.log(data);
      this.products = data; // en el objeto products se va a mostrar en pantalla
    });
  }

  // este evento es el q escucha. Y recibimos ese producto
  onAddToShoppingCart(product: Product) {
    console.log(product);

    // hacemos uso de los metodos del servicio
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

}
