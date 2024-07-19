import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonButtons, IonContent, IonGrid, IonHeader, IonMenuButton, IonRow, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { NavPage } from "../../components/nav/nav.page";
import { SlidePage } from "../../components/slide/slide.page";

@Component({
  selector: 'app-index',
  templateUrl: './index.page.html',
  styleUrls: ['./index.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonHeader, IonTitle, IonToolbar,
    CommonModule, FormsModule, NavPage, IonButtons,
    IonMenuButton, IonGrid, IonRow, IonButton,
    SlidePage
  ]
})
export class IndexPage implements OnInit {
  slidesPersonal: Array<any> = [];
  slidesProgram: Array<any> = [];
  slidesContent: Array<any> = [];

  constructor() { }

  ngOnInit() {
    this.slidesPersonal = [
      { banner: 'assets/backgrounds/training1.png' },
      { banner: 'assets/backgrounds/pilates.png' },
      { banner: 'assets/backgrounds/training1.png' },
    ];

    this.slidesProgram = [
      { banner: 'assets/backgrounds/training2.png' },
      { banner: 'assets/backgrounds/pilates.png' },
      { banner: 'assets/backgrounds/training2.png' },
    ];

    this.slidesContent = [
      { banner: 'assets/backgrounds/training1.png' },
      { banner: 'assets/backgrounds/pilates.png' },
      { banner: 'assets/backgrounds/training1.png' },
    ];

  }

}
