import {IonButton, IonContent, IonHeader, IonRouterLink, IonTitle, IonToolbar} from '@ionic/angular/standalone';

import { Component, OnInit } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink} from "@angular/router";


@Component({
  selector: 'app-firstscreen',
  templateUrl: './firstscreen.page.html',
  styleUrls: ['./firstscreen.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonButton, IonTitle, IonToolbar, CommonModule, FormsModule, IonRouterLink, RouterLink, NgOptimizedImage]
})
export class FirstscreenPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
