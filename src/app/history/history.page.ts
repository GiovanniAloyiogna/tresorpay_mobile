import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle,   IonIcon,IonToolbar, IonButtons,IonMenuButton, IonButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader,  IonIcon, IonTitle, IonToolbar, IonButtons,IonButton, IonMenuButton, CommonModule, FormsModule]
})
export class HistoryPage implements OnInit {

  constructor() { 

      addIcons({arrowBack });
  }

  ngOnInit() {
  }

}
