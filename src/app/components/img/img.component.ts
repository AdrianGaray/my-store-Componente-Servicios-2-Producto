// agregar la detencion de cambios: OnChange
// agregar cuando se le elimina el componente OnDestroy
import { Component, Input, Output, EventEmitter, OnInit ,OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})

// implementar la interfaz: OnInit y OnChanges
export class ImgComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {
  img: string = '';

  @Input('img')
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change just img  =>' ,this.img);
    // code
  }

  @Input() alt: string = '';

  @Output() loaded = new EventEmitter<string>();
  imageDefault = './assets/images/default.png';

  // correr una tarea que corra por c/segundo incrementando este counter
  // como es asincrono se realiza en el ngOnInit
  /* counter = 0;
  counterFn: number | undefined; */

  constructor() {
    // before render -- corre antes del render
    // NO async -- once time -- No coorer cosas de forma asincronoas
    console.log('constructor', 'imgValue =>', this.img);
  }

  ngOnChanges(changes: SimpleChanges) {
    // before -- during render -- corre antes del render y dureante, porq va estar inpeccionando cambios
    // changes inputs -- multiples times -- su objetivo como tal es actualizando los cambios en los INPUTS. Coore muchas veces, las veces que actualizamos los inputs de nuestro componentes
    // por ejemplo, cada vez desde el padre actulizamos el valor img recibimos esa actualizacion aca
    // angular tiene que montar el componente <app-img></app-img> (alistarlo - prepararlo)  y todos esos eventos van a correr antes del render
    console.log('ngOnChanges', 'imgValue =>', this.img);
    console.log('changes', changes);
  }

  ngOnInit(): void {
    // before render
    // async - fetch - llamadas a API - Promesas  - Espera de tiempo -- once time - Aqui si es donde podemos correr cosas asincronicas. Y corre una sola vez
    console.log('ngOnInit', 'imgValue =>', this.img);

    /*this.counterFn = window.setInterval(() => {
      this.counter += 1;
      console.log('run counter');
    }, 1000);*/
  }

  ngAfterViewInit() {
    // after render -- coore despues de q ya todos esten renderizando
    // handler children -- once time -- Se maneja los hijos.
    // Por ejemplo en el componente tiene hijos img.component.html son <img> <ng-template></ng-template>, si quirieramos manipular estos hijos, en esta parte seria
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    // delete -- once time -- se elimina este componente
    // lo dejamos de verlo en la interfaz
    // por ejemplo en ngIf, crea un compnente y cuando lo quitamos, lo remueve de la interfaz, ese compoente deja de existir
    console.log('ngOnDestroy');

    // window.clearInterval(this.counterFn);
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('log hijo');
    this.loaded.emit(this.img);
  }
}
