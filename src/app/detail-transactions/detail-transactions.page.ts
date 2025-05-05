import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    IonButton,
    IonButtons, IonCard, IonCardContent, IonCol,
    IonContent, IonGrid,
    IonHeader,
    IonIcon, IonLabel,
    IonMenuButton, IonRow,
    IonTitle,
    IonToolbar, NavController
} from '@ionic/angular/standalone';
import {Router} from "@angular/router";
import {arrowBack, arrowBackOutline, receiptOutline} from "ionicons/icons";
import {addIcons} from "ionicons";
import {ButtonDirective} from "primeng/button";

@Component({
  selector: 'app-detail-transactions',
  templateUrl: './detail-transactions.page.html',
  styleUrls: ['./detail-transactions.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonButtons, IonIcon, IonMenuButton, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonLabel, ButtonDirective]
})
export class DetailTransactionsPage implements OnInit {
  formData:any;
  constructor(
    private router: Router,
    private navCtrl: NavController    // ← injection ici
  ) {
    addIcons({ arrowBack, arrowBackOutline, receiptOutline });
  }

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    const data = nav?.extras.state;
  
    if (data) {
      this.formData=data
    }
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

  goBackToForm() {
    this.navCtrl.back();
  }
}
