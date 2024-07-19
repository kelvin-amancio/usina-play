import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logInOutline } from 'ionicons/icons';
import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-root',
  template: '<ion-router-outlet/>',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    addIcons({ logInOutline })
  }
}
