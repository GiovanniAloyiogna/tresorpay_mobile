import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonButton,
  IonLabel,
  IonInput,
  IonCard,
  IonCardContent,
  IonIcon,
  IonMenuButton
} from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';
import { ButtonDirective } from 'primeng/button';
import {addIcons} from "ionicons";
import {arrowBackOutline} from "ionicons/icons";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonButton,
    IonLabel,
    IonInput,
    IonCard,
    IonCardContent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonMenuButton,
    IonIcon,
    ButtonDirective
  ],
})
export class ProfilePage implements OnInit {
  // 1) déclaration du FormGroup
  profileForm!: FormGroup;
  // 1) On redéclare user
  user = {
    nom: 'KASSA-BAYONNE',
    prenom: 'Alain',
    email: 'alainkassa@gmail.com',
  };

  constructor(
    private navCtrl: NavController,
    private fb: FormBuilder    // 2) injecter FormBuilder
  ) {
    addIcons({arrowBackOutline})
  }

  ngOnInit() {
    // 3) instanciation du FormGroup avec les controls et validateurs
    this.profileForm = this.fb.group({
      nom:            ['KASSA-BAYONNE', Validators.required],
      prenom:         ['Alain', Validators.required],
      phoneNumber:    ['123456789', Validators.pattern(/^[0-9]+$/)],
      email:          ['alain.kassa@gmail.com', [Validators.required, Validators.email]],
      password:       ['', Validators.minLength(6)],
      confirmPassword:['', Validators.minLength(6)]
    }, {
      // 4) validation croisée pour vérifier que password et confirmPassword correspondent
      validators: this.passwordsMatchValidator
    });
  }

  // Validator personnalisé
  private passwordsMatchValidator(group: FormGroup) {
    const pw = group.get('password')?.value;
    const cpw = group.get('confirmPassword')?.value;
    return pw === cpw ? null : { passwordsMismatch: true };
  }

  // 5) gestion du submit
  onSubmit() {
    if (this.profileForm.valid) {
      console.log('Formulaire valide :', this.profileForm.value);
      // Appel de ton service pour mettre à jour le profil…
    } else {
      // Marquer tous les champs comme “touched” pour afficher les erreurs
      this.profileForm.markAllAsTouched();
    }
  }

  goBack() {
    this.navCtrl.back();
  }
}
