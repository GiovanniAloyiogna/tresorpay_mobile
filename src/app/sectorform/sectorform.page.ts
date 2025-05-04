import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  IonImg, NavController,
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  add,
  funnelOutline,
  schoolOutline,
  homeOutline,
  alarmOutline,
  mapOutline,
  locateOutline, arrowBack, arrowBackOutline,
} from 'ionicons/icons';

import { ButtonModule } from 'primeng/button';
import { Listbox } from 'primeng/listbox';
import { Select } from 'primeng/select';
import { MultiSelect } from 'primeng/multiselect';
import { Drawer } from 'primeng/drawer';
import { Avatar } from 'primeng/avatar';
import { NgIf, NgOptimizedImage } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Dropdown } from 'primeng/dropdown';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-sectorform',
  templateUrl: './sectorform.page.html',
  styleUrls: ['./sectorform.page.scss'],
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
    NgIf,

    ReactiveFormsModule,
    IonCardTitle,
    IonCardSubtitle,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonImg,
  ],
})
export class SectorformPage implements OnInit {
  floatValue: any = null;
  selectButtonValue: any = null;
  dropdownValue: any = null;
  listboxValue: any = null;
  autoValue: any[] | undefined;
  showForm: boolean = true;
  visible: boolean = false;
  slug: string = '';

  dropdownValues = [
    { name: 'FRAIS INSCRIPTION', code: 'INS' },
    { name: 'FRAIS REINSCRIPTION',       code: 'REIN' },
    { name: 'FRAIS SCOLARITE',  code: 'SCOL' },
    { name: 'FRAIS DROITS EXAMEN',      code: 'EXAM' },
    { name: 'FRAIS CANTINE', code: 'CANT' },
    { name: 'FRAIS CAMPUS', code: 'LOGE' },
  ];

  toggleValue: boolean = false;
  treeSelectNodes: any[] = [];
  selectedNode: any = null;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private apiService: ApiService     // ← injection ici
    ) {
    addIcons({
      add,
      funnelOutline,
      schoolOutline,
      homeOutline,
      alarmOutline,
      mapOutline,
      locateOutline,
      arrowBack, arrowBackOutline
    });
  }

  ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug') || '';
    try {
      /*this.apiService.getAllParamEnfantBySlugParent(this.slug).subscribe(
        {
          next: (data) => {
            this.etablissements = data.contenu;

          },
          error: (err) => {
            console.error('Failed to load countries:', err);
          }
        }
      )*/
    } catch (error: any) {
      //await this.presentAlert('Error during login');
    }
  }

  redirectTo(url: string): void {
    this.router
      .navigate([url])
      .then(() => {
        console.log('Navigation has finished');
      })
      .catch((err) => {
        console.error(`Failed to navigate to ${url}: ${err}`);
      });
  }

  closeCallback($event: MouseEvent) {
    this.visible = false;
  }

  onSubmit() {
    console.log('Form submitted with values:', {
      floatValue: this.floatValue,
      selectButtonValue: this.selectButtonValue,
      dropdownValue: this.dropdownValue,
      listboxValue: this.listboxValue,
      autoValue: this.autoValue,
    });
  }

  openDrawer() {
    this.visible = true;
  }
  goToPaymentMethods() {
    this.showForm = false;
  }

  goBackToForm() {
    this.navCtrl.back();
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

  goBack() {
    this.navCtrl.back();
  }
}
