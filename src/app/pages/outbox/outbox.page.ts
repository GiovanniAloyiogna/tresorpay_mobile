import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonButtons, IonContent, IonHeader, IonMenuButton, IonTitle, IonToolbar} from '@ionic/angular/standalone';

@Component({
  selector: 'app-outbox',
  templateUrl: './outbox.page.html',
  styleUrls: ['./outbox.page.scss'],
  standalone: true,
    imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonMenuButton]
})
export class OutboxPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
