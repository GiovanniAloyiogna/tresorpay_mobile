import { IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-firstscreen',
  templateUrl: './firstscreen.page.html',
  styleUrls: ['./firstscreen.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader,IonButton, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class FirstscreenPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
