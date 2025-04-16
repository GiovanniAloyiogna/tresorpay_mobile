import { Component, OnInit } from '@angular/core';
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
  IonGrid, IonMenu, IonAccordionGroup, IonAccordion, IonBadge
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  add,
  funnelOutline,
  schoolOutline,
  homeOutline,
  alarmOutline,
} from 'ionicons/icons';
import { ButtonModule } from 'primeng/button';
import {Drawer} from "primeng/drawer";
import {Avatar} from "primeng/avatar";

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
    IonBadge
  ],
})
export class DashboardPage implements OnInit {
  visible = false
  constructor() {
    addIcons({ add, funnelOutline, schoolOutline, homeOutline, alarmOutline });
  }

  ngOnInit() {}

  closeCallback($event: MouseEvent) {

  }
}
