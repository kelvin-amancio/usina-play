import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonButtons, IonContent, IonGrid, IonHeader, IonBadge, IonMenuButton, IonIcon, IonCol, IonRow, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { NavPage } from "../../components/nav/nav.page";
import { SlidePage } from "../../components/slide/slide.page";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar,
    CommonModule, FormsModule, NavPage, IonButtons,
    IonMenuButton, IonGrid, IonRow, IonButton,
    SlidePage, IonCol, IonBadge, IonIcon
  ]
})
export class IndexPage implements OnInit {
  authService = inject(AuthService);
  slidesPersonal: Array<any> = [];
  slidesProgram: Array<any> = [];
  slidesContent: Array<any> = [];
  ionFabValue:boolean = true;
  email = signal("");

  constructor() { }

  ngOnInit() {
    this.getCurretUser();

    this.slidesPersonal = [
      { banner: 'assets/backgrounds/training1.png', text: "NOVO TREINO" },
      { banner: 'assets/backgrounds/pilates.png',text: "NOVO TREINO" },
      { banner: 'assets/backgrounds/training1.png',text: "NOVO TREINO" },
    ];

    this.slidesProgram = [
      { banner: 'assets/backgrounds/training2.png',text: "NOVO TREINO" },
      { banner: 'assets/backgrounds/pilates.png',text: "NOVO TREINO" },
      { banner: 'assets/backgrounds/training2.png',text: "NOVO TREINO" },
    ];

    this.slidesContent = [
      { banner: 'assets/backgrounds/training1.png',text: "NOVO TREINO" },
      { banner: 'assets/backgrounds/pilates.png',text: "NOVO TREINO" },
      { banner: 'assets/backgrounds/training1.png',text: "NOVO TREINO" },
    ];
  }

  getCurretUser(){
    this.email.set(this.authService.getCurrentUserEmail()!);
  }

}
