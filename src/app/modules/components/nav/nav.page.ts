import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButtons, IonButton,  IonContent, IonHeader, IonMenu, IonMenuButton, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.page.html',
  styleUrls: ['./nav.page.scss'],
  standalone: true,
  imports: [
            IonContent, IonHeader, IonTitle, 
            IonToolbar, CommonModule, FormsModule, 
            IonMenu, IonButtons, IonMenuButton,
            IonButton
          ]
})
export class NavPage  {
  #authService = inject(AuthService);
  #router = inject(Router);

  logout(){
    this.#authService.logout().then(() =>  this.#router.navigate(['login']));
  }

}
