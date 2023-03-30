import { Component, Input  } from '@angular/core'; //importamos Input
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
    name: ''
  };
}
