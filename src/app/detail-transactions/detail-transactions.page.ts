import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonButtons, IonCol,
  IonContent, IonGrid,
  IonHeader,
  IonIcon,
  IonMenuButton, IonRow,
  IonTitle,
  IonToolbar, NavController
} from '@ionic/angular/standalone';
import {Router} from "@angular/router";
import {arrowBack, arrowBackOutline, receiptOutline} from "ionicons/icons";
import {addIcons} from "ionicons";

@Component({
  selector: 'app-detail-transactions',
  templateUrl: './detail-transactions.page.html',
  styleUrls: ['./detail-transactions.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonButtons, IonIcon, IonMenuButton, IonGrid, IonRow, IonCol]
})
export class DetailTransactionsPage implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController    // ← injection ici
  ) {
    addIcons({ arrowBack, arrowBackOutline, receiptOutline });
  }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }
}
