import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButton,
  IonContent,
  IonButtons,
} from '@ionic/angular/standalone';
@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonicModule,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
    IonContent,
  ],
})
export class ErrorModalComponent {
  @Input() errorMessage: string = '';

  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss();
  }
}
