import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';

  showImg = true;



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
