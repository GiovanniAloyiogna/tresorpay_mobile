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
  NavController, // ← ajouter NavController ici
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBack, arrowBackOutline } from 'ionicons/icons';
import { Router } from '@angular/router';
import { MultiSelect } from 'primeng/multiselect';
import { SelectItem } from 'primeng/api';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

interface Transaction {
  dateEffet: Date;
  motif: string;

  montant: number;
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
    MultiSelect,
  ],
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

  // transactions: Transaction[] = [
  //   {
  //     date: '20-10-2025',
  //     description: 'Frais scolaire',
  //     amount: 904.0,
  //     variation: +1.8,
  //   },
  //   {
  //     date: '20-02-2025',
  //     description: 'Inscription',
  //     amount: 321.0,
  //     variation: 21.0,
  //   },
  //   {
  //     date: '20-02-2025',
  //     description: 'Inscription',
  //     amount: 321.0,
  //     variation: 21.0,
  //   },
  //   {
  //     date: '20-02-2025',
  //     description: 'Inscription',
  //     amount: 321.0,
  //     variation: 21.0,
  //   },
  //   {
  //     date: '20-02-2025',
  //     description: 'Inscription',
  //     amount: 321.0,
  //     variation: 21.0,
  //   },
  //   {
  //     date: '20-02-2025',
  //     description: 'Inscription',
  //     amount: 321.0,
  //     variation: 21.0,
  //   },
  //   {
  //     date: '20-02-2025',
  //     description: 'Inscription',
  //     amount: 321.0,
  //     variation: 21.0,
  //   },
  //   // … autres entrées …
  // ];
  filteredTransactions: Transaction[] = [];
  searchTerm = '';
  currentSegment = 'tous';
  compteslug = '';
  alltransactions: Transaction[] = [];
  constructor(
    private router: Router,
    private navCtrl: NavController,
    private apiService: ApiService,
    private authService: AuthService // ← injection ici
  ) {
    addIcons({ arrowBack, arrowBackOutline });
  }

  ngOnInit() {
    this.authService.getCurrentUser().subscribe((user) => {
      this.compteslug = user?.slug;
    });
    // this.filteredTransactions = this.transactions;

    try {
      this.apiService.getUserTransactions(this.compteslug).subscribe({
        next: (data) => {
          console.log('all data trsf', data.contenu);
          this.alltransactions = data.contenu;
        },
        error: (err) => {
          console.error('Failed to load countries:', err);
        },
      });
    } catch (error: any) {
      //await this.presentAlert('Error during login');
    }
  }
  // … vos autres méthodes …

  goBack() {
    this.navCtrl.back();
  }
}
