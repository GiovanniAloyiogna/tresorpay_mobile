import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader, IonIcon, IonMenuButton, IonRow,
  IonTitle,
  IonToolbar, NavController
} from '@ionic/angular/standalone';
import {Router} from "@angular/router";

@Component({
  selector: 'app-validation-paiement',
  templateUrl: './validation-paiement.page.html',
  styleUrls: ['./validation-paiement.page.scss'],
  standalone: true,
    imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonButtons, IonCol, IonGrid, IonIcon, IonMenuButton, IonRow]
})
export class ValidationPaiementPage implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController    // ← injection ici
  ) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }
}
