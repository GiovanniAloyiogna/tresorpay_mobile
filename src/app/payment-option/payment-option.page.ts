import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {
  IonText,
  IonSelect,
  IonSelectOption,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonButton,
  IonRow,
  IonCol,
  IonLabel,
  IonSearchbar,
  IonItem,
  IonList,
  IonGrid,
  IonFooter,
  IonIcon,
  IonCardTitle,
  IonCardSubtitle,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonImg,
  NavController,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  add,
  funnelOutline,
  schoolOutline,
  homeOutline,
  alarmOutline,
  mapOutline,
  locateOutline,
  arrowBackCircle,
  checkmarkCircleOutline,
  arrowBack,
  arrowBackOutline,
} from 'ionicons/icons';

import { ButtonModule } from 'primeng/button';
import { Listbox } from 'primeng/listbox';
import { Select } from 'primeng/select';
import { MultiSelect } from 'primeng/multiselect';
import { Drawer } from 'primeng/drawer';
import { Avatar } from 'primeng/avatar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-payment-option',
  templateUrl: './payment-option.page.html',
  styleUrls: ['./payment-option.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonText,
    IonSelect,
    IonSelectOption,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonMenuButton,
    IonButton,
    IonRow,
    IonCol,
    IonLabel,
    IonSearchbar,
    IonItem,
    IonList,
    IonGrid,
    ButtonModule,
    Listbox,
    Select,
    Drawer,
    MultiSelect,
    Avatar,
    IonFooter,
    IonIcon,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    IonCardTitle,
    IonCardSubtitle,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonImg,
  ],
})
export class PaymentOptionPage implements OnInit {
  loginForm!: FormGroup;
  showForm: boolean = true;
  visible: boolean = false;
  libelle: string = '';
  formData: any = {};
  constructor(
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private navCtrl: NavController // ← injection ici
  ) {
    addIcons({
      add,
      funnelOutline,
      schoolOutline,
      homeOutline,
      alarmOutline,
      mapOutline,
      locateOutline,
      arrowBackCircle,
      checkmarkCircleOutline,
      arrowBack,
      arrowBackOutline,
    });
  }

  ngOnInit(): void {
    const nav = this.router.getCurrentNavigation();
    this.formData = nav?.extras.state || {};

    this.libelle = this.route.snapshot.paramMap.get('libelle') || '';

    // Fusionner les données et ajouter 'Moyen paiement'
    this.formData = {
      ...this.formData,
      Moyenpaiement: this.libelle,
    };

    this.loginForm = this.fb.group({
      phoneNumber: [
        '',
        [Validators.required, Validators.pattern('^\\d{8,15}$')],
      ],
    });
  }

  onSubmitNumber(): void {
    if (this.loginForm.valid) {
      const phone = this.loginForm.value.phoneNumber;
  
      // Ajouter le téléphone à formData
      this.formData = {
        ...this.formData,
        comptePayeur: phone,
      };
  
      // Redirection avec formData via l'objet state
      this.router
        .navigate(['/detailpaiement'], {
          state: this.formData,
        })
        .then(() => {
          console.log('Redirection réussie avec formData :', this.formData);
        })
        .catch((err) => {
          console.error('Erreur de redirection :', err);
        });
    } else {
      console.warn('Formulaire invalide');
      this.loginForm.markAllAsTouched();
    }
  }
  
  closeCallback($event: MouseEvent) {
    this.visible = false;
  }

  openDrawer() {
    this.visible = true;
  }

  goToPaymentMethods() {
    this.showForm = false;
  }

  redirectToPayment(url: string, method: string): void {
    this.router
      .navigate([url], { queryParams: { method } })
      .then(() => {
        console.log('Navigation terminée avec méthode :', method);
      })
      .catch((err) => {
        console.error(`Échec de la navigation vers ${url} :`, err);
      });
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

  goBack() {
    this.navCtrl.back();
  }

  goBackToForm() {
    this.navCtrl.back();
  }
}
