import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonLabel, IonInput, IonCard, IonCardContent, IonIcon, IonMenuButton } from '@ionic/angular/standalone';
import { NavController } from '@ionic/angular';

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
    IonMenuButton,
    IonIcon
  ],
})
export class ProfilePage implements OnInit {
  // Declare user object with fields bound to form
  user = {
    nom: 'KASSA-BAYONNE',
    prenom: 'Alain',
    email: 'Alain.KASSA-BAYONNE@GMAIL.COM',
    newPassword: '',
    confirmPassword: '',
  };

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    // Fetch user data if needed
  }

  // Go back function to navigate back
  goBack() {
    this.navCtrl.back();
  }


  updateProfile() {
    
    if (this.user.newPassword !== this.user.confirmPassword) {
      alert('Les mots de passe ne correspondent pas.');
      return;
    }

    // Log the updated profile
    console.log('Profil mis à jour :', this.user);
    alert('Profil mis à jour avec succès !');
  }
}
