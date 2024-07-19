import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonTitle, IonToolbar, ToastController } from '@ionic/angular/standalone';
import { LoginService } from 'src/app/services/login.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-siginup',
  templateUrl: './siginup.page.html',
  styleUrls: ['./siginup.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonLabel,
    IonInput, IonItem, CommonModule, IonButton, FormsModule,
    ReactiveFormsModule, RouterLink, IonIcon]
})
export class SiginupPage implements OnInit {
  loginService = inject(LoginService);
  toastController = inject(ToastController);
  router = inject(Router);

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  })

  ngOnInit() {
  }

  signup() {
    this.loginService.signup({ email: this.registerForm.value.email, password: this.registerForm.value.password })
      .then(
        () => {
          this.toast(`Usuário criado com sucesso!`);
          this.router.navigate(['login']);
        }, err => {
          this.toast(`Erro ao criar usuário: ${err.message}!`);
        })
  }

  async toast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2500,
      position: 'bottom',
    });

    await toast.present();
  }

}
