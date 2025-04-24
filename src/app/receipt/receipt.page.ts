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
  IonToolbar, NavController,
  IonCard,
  IonCardContent,
  IonLabel,
  IonFooter

} from '@ionic/angular/standalone';
import {Router} from "@angular/router";
import {arrowBack, arrowBackOutline, downloadOutline, receiptOutline, shareOutline, shareSocialOutline} from "ionicons/icons";
import {addIcons} from "ionicons";
import {ButtonDirective} from "primeng/button";


@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.page.html',
  styleUrls: ['./receipt.page.scss'],
  standalone: true,
    imports: [IonContent, IonCard,
        IonCardContent, IonHeader, IonLabel, IonFooter, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonButtons, IonIcon, IonMenuButton, IonGrid, IonRow, IonCol, ButtonDirective]
})
export class ReceiptPage implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController
  ) {
    addIcons({ arrowBack, arrowBackOutline, receiptOutline, downloadOutline, shareSocialOutline});
  }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

  redirectTo(url: string) {
    this.router
      .navigate([url])
      .then(() => {
        console.log('Navigation terminée avec méthode :');
      })
      .catch((err) => {
        console.error(`Échec de la navigation vers ${url} :`, err);
      });
  }
}
