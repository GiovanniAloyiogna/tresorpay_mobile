import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonMenuButton,
  IonTitle,
  IonToolbar, NavController
} from '@ionic/angular/standalone';
import {Router} from "@angular/router";

@Component({
  selector: 'app-facture',
  templateUrl: './facture.page.html',
  styleUrls: ['./facture.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonButtons, IonIcon, IonMenuButton]
})
export class FacturePage implements OnInit {

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
