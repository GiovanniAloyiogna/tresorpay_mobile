import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonIcon,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonRow,
  IonCol,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonSearchbar,
  IonList,
  IonItem,
  IonFooter,
  IonGrid,
  NavController      // ← ajouter NavController ici
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {arrowBack, arrowBackOutline} from 'ionicons/icons';
import { Router } from '@angular/router';
import { MultiSelect } from 'primeng/multiselect';
import {SelectItem} from "primeng/api";

interface Transaction {
  date: string;
  description: string;
  amount: number;
  variation: number;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonIcon,
    IonToolbar,
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonButtons,
    IonMenuButton,
    IonButton,
    IonRow,
    IonCol,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonSearchbar,
    IonList,
    IonItem,
    IonFooter,
    IonGrid,
    CommonModule,
    FormsModule,
    MultiSelect
  ]
})
export class HistoryPage implements OnInit {

  // 1) La liste statique de secteurs
  sectors: SelectItem[] = [
    { label: 'Tous', value: 'all' },
    { label: 'Santé', value: 'sante' },
    { label: 'Éducation', value: 'education' },
    { label: 'Transport', value: 'transport' },
    { label: 'Télécom', value: 'telecom' },
    // … ajoutez-en autant que nécessaire …
  ];

  // 2) Le(s) secteur(s) sélectionné(s)
  selectedSectors: any[] = [];


  transactions: Transaction[] = [
    { date: '20-10-2025', description: 'Frais scolaire', amount: 904.0, variation: +1.80 },
    { date: '20-02-2025', description: 'Inscription', amount: 321.0, variation: 21.0 },
    { date: '20-02-2025', description: 'Inscription', amount: 321.0, variation: 21.0 },
    { date: '20-02-2025', description: 'Inscription', amount: 321.0, variation: 21.0 },
    { date: '20-02-2025', description: 'Inscription', amount: 321.0, variation: 21.0 },
    { date: '20-02-2025', description: 'Inscription', amount: 321.0, variation: 21.0 },
    { date: '20-02-2025', description: 'Inscription', amount: 321.0, variation: 21.0 },
    // … autres entrées …
  ];
  filteredTransactions: Transaction[] = [];
  searchTerm = '';
  currentSegment = 'tous';

  constructor(
    private router: Router,
    private navCtrl: NavController    // ← injection ici
  ) {
    addIcons({ arrowBack, arrowBackOutline });
  }

  ngOnInit() {
    this.filteredTransactions = this.transactions;
  }

  // … vos autres méthodes …

  goBack() {
    this.navCtrl.back();
  }
}
