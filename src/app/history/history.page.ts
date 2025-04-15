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
  IonGrid
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';
import { Router } from '@angular/router';

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
     IonToolbar,
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
    FormsModule
  ]
})
export class HistoryPage implements OnInit {
  transactions: Transaction[] = [
    { date: '20-10-2025', description: 'Frais scolaire', amount: 904.0, variation: -1.80 },
    { date: '20-02-2025', description: 'Inscription', amount: 321.0, variation: 21.0 },
    { date: '20-02-2025', description: 'Inscription', amount: 321.0, variation: 21.0 },
    { date: '20-02-2025', description: 'Inscription', amount: 321.0, variation: 21.0 },
    { date: '20-02-2025', description: 'Inscription', amount: 321.0, variation: 21.0 },
    { date: '20-02-2025', description: 'Inscription', amount: 321.0, variation: 21.0 },
    { date: '20-02-2025', description: 'Inscription', amount: 321.0, variation: 21.0 },
    { date: '20-02-2025', description: 'Inscription', amount: 321.0, variation: 21.0 },
    { date: '20-04-2025', description: 'Inscription', amount: 1893.0, variation: -3.20 }
  ];

  filteredTransactions: Transaction[] = [];
  searchTerm: string = '';
  currentSegment: string = 'tous';

  constructor(private router: Router) {
    addIcons({ arrowBack });
  }

  ngOnInit() {
    this.filteredTransactions = this.transactions;
  }

  onSearchChange(event: any) {
    this.searchTerm = event.detail.value;
    this.filterTransactions();
  }

  onSegmentChanged(event: any) {
    this.currentSegment = event.detail.value;
    this.filterTransactions();
  }

  filterTransactions() {
    let filtered = this.transactions;
    if (this.currentSegment === 'inscriptions') {
      filtered = filtered.filter(t => t.description.toLowerCase() === 'inscription');
    }
    if (this.searchTerm && this.searchTerm.trim().length > 0) {
      const searchLower = this.searchTerm.toLowerCase();
      filtered = filtered.filter(t =>
        t.description.toLowerCase().includes(searchLower) ||
        t.date.toLowerCase().includes(searchLower)
      );
    }
    this.filteredTransactions = filtered;
  }

  openFilter() {
    console.log('Ouverture du filtre...');
  }

  goHome() {
    console.log('Navigation vers Accueil...');
    this.router.navigate(['/home']);
  }

  goHistory() {
    console.log('Navigation vers Historique...');
    this.router.navigate(['/history']);
  }
}
