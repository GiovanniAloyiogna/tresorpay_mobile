import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonText,
  IonSelect,
  IonSelectOption,
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
  IonMenu,
  IonAccordionGroup,
  IonAccordion,
  IonBadge,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  add,
  funnelOutline,
  schoolOutline,
  homeOutline,
  alarmOutline,
  medkitOutline,
  hammerOutline,
  readerOutline,
  earthOutline,
  airplaneOutline,
  cashOutline,
  bonfireOutline,
  flowerOutline, fishOutline, cardOutline, bulbOutline, carOutline,
} from 'ionicons/icons';
import { ButtonModule } from 'primeng/button';
import { Drawer } from 'primeng/drawer';
import { Avatar } from 'primeng/avatar';
import { Listbox } from 'primeng/listbox';
import { Select } from 'primeng/select';
import { TreeSelect } from 'primeng/treeselect';
import { MultiSelect } from 'primeng/multiselect';
import { TreeNode } from 'primeng/api';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonButton,
    IonTabBar,
    IonTabs,
    IonTabButton,
    IonButtons,
    IonMenuButton,
    IonLabel,
    IonIcon,
    IonTitle,
    IonText,
    IonToolbar,
    IonItem,
    IonList,
    IonSelect,
    IonSelectOption,
    CommonModule,
    FormsModule,
    NgOptimizedImage,
    IonFooter,
    IonGrid,
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
    ButtonModule,
    Drawer,
    Avatar,
    IonMenu,
    IonAccordionGroup,
    IonAccordion,
    IonBadge,
    Listbox,
    Select,
    TreeSelect,
    MultiSelect,

  ],
})
export class DashboardPage implements OnInit {
  visible = false;

  floatValue: any = null;

  iftaValue: any = null;

  inputOtpValue: any = null;

  autoValue: any[] | undefined;

  autoFilteredValue: any[] = [];

  selectedAutoValue: any = null;

  calendarValue: any = null;

  inputNumberValue: any = null;

  sliderValue: number = 50;

  ratingValue: any = null;

  colorValue: string = '#1976D2';

  radioValue: any = null;

  checkboxValue: any[] = [];

  switchValue: boolean = false;

  listboxValues: any[] = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];

  listboxValue: any = null;

  dropdownValues = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' },
  ];

  dropdownValue: any = null;

  toggleValue: boolean = false;

  selectButtonValue: any = null;

  selectButtonValues: any = [
    { name: 'Option 1' },
    { name: 'Option 2' },
    { name: 'Option 3' },
  ];

  knobValue: number = 50;

  inputGroupValue: boolean = false;

  treeSelectNodes!: TreeNode[];

  selectedNode: any = null;

  constructor(private router: Router) {
    addIcons({ add, funnelOutline, schoolOutline, homeOutline, alarmOutline, medkitOutline, hammerOutline, readerOutline,
      earthOutline, airplaneOutline, cashOutline, bonfireOutline, flowerOutline, fishOutline, cardOutline, bulbOutline, carOutline });
  }

  ngOnInit() {}

  closeCallback($event: MouseEvent) {}
  redirectTo(url: string, sector: string): void {
    this.router.navigate([url]).then(r => console.log("navigation has finished"));
  }
}
