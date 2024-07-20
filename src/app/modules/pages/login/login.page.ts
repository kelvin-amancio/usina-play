import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonTitle, IonToolbar, ToastController } from '@ionic/angular/standalone';
import { AuthService } from 'src/app/services/auth.service'; 
import { Router, RouterLink } from '@angular/router';
import { IUser } from '../../interfaces/IUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonLabel,
    IonInput, IonItem, CommonModule, IonButton, FormsModule,
    ReactiveFormsModule, IonIcon, RouterLink
  ]
})
export class LoginPage {
  #authService = inject(AuthService);
  #toastController = inject(ToastController);
  #router = inject(Router);
  userModel = signal<IUser | null>(null);

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })


  login() {
    if (this.loginForm.valid) {

      this.userModel.set({email: this.loginForm.value.email!, password: this.loginForm.value.password!});

      this.#authService.login(this.userModel()!)
        .then((res) => {
          this.toast(`Seja bem-vindo ${res.user.email}!`);
          this.#router.navigate(['inicio']);
        },
          err => {
            console.log(err);
          }
        );
    }
  }

  async toast(message: string) {
    const toast = await this.#toastController.create({
      message: message,
      duration: 2500,
      position: 'bottom',
    });

    await toast.present();
  }

}
