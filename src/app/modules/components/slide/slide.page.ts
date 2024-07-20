import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonicSlides, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.page.html',
  styleUrls: ['./slide.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SlidePage  {
  @ViewChild('swiper')
  swiperRef: ElementRef | undefined;
  @Input() slides: Array<any> = [];
  @Input() title: string = "";
  @Input() ionFabeHidden: boolean = false;
  @Input() ionBadgeHidden: boolean = false;

  swiperSlides = [IonicSlides];

}
