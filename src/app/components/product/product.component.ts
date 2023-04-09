// con el Output, hacemos una comunicacion con el padre (products)
import { Component, Input, Output, EventEmitter  } from '@angular/core'; //importamos Input
import { Product } from '../../models/product.model'; //importa el modelo de Product

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  // enviar desde el padre y No renderizado desde el componente, para q se pueda reusar
  // le estamos dando un estado inicial
	/* creamos una variable de tipo product. Le colocamos input porque vamos a recibir
		los productos desde el componente base (app.component)*/
  @Input() product: Product = {
    id: '',
    price: 0,
    image: '',
    title: '',
    category: '',
    description: ''
  };

  // con Output vamos a decirle q queremos agregar un evento llamado 'addedProduct'
  // queresmo trasmitirle al padre el producto q se esta agregando, deberia trasmitir informacion de tipo <Product>
  @Output() addedProduct = new EventEmitter<Product>(); // estamos enviendo un objeto completo (<Product>)

  onAddToCart() {
    this.addedProduct.emit(this.product);
  }
}
