import {Component, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonButtons, IonCard, IonCardContent,
  IonContent,
  IonHeader, IonIcon, IonLabel,
  IonMenuButton,
  IonTitle,
  IonToolbar, NavController
} from '@ionic/angular/standalone';
import {Router} from "@angular/router";
import {addIcons} from "ionicons";
import {
  add,
  airplaneOutline,
  alarmOutline, arrowBackOutline, arrowUpOutline,
  bonfireOutline,
  bulbOutline,
  cardOutline,
  carOutline,
  cashOutline,
  earthOutline,
  fishOutline,
  flowerOutline,
  funnelOutline,
  hammerOutline,
  homeOutline,
  medkitOutline,
  readerOutline,
  schoolOutline
} from "ionicons/icons";

@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.page.html',
  styleUrls: ['./apropos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton, IonButton, IonIcon, IonCard, IonCardContent, IonLabel]
})
export class AproposPage implements OnInit {
  constructor(private router: Router, private navCtrl: NavController) {
    addIcons({ arrowUpOutline, arrowBackOutline });
  }
  @ViewChild(IonContent) content!: IonContent;

  scrollToBottom() {
    this.content.scrollToBottom(500);
  }

  scrollToTop() {
    this.content.scrollToTop(500);
  }

  goBack() {
    this.navCtrl.back();
  }

  ngOnInit() {
  }
}
