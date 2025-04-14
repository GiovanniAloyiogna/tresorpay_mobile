import { Component, OnInit } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader,IonButton, IonButtons,IonIcon, IonMenuButton, IonLabel,IonTitle,IonText, IonToolbar,IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { add, funnelOutline, schoolOutline,  } from 'ionicons/icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonButton,IonButtons, IonMenuButton,IonLabel, IonIcon, IonTitle, IonText, IonToolbar, IonItem, IonList, IonSelect, IonSelectOption, CommonModule, FormsModule, NgOptimizedImage]
})
export class DashboardPage implements OnInit {

  constructor() {
    addIcons({add, funnelOutline, schoolOutline})
   }

  ngOnInit() {
  }

}
