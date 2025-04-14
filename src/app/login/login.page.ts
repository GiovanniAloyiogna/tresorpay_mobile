import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  IonButton,
  IonLabel,
  IonInput,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,   // Optionnel : à retirer si non utilisé dans le template
  IonText,
  IonSpinner  // Ajouté pour que <ion-spinner> soit reconnu
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html', // Le template doit inclure votre overlay avec <ion-spinner>
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonLabel,
    IonInput,
    IonButton,
    IonHeader,
    IonTitle,
    IonToolbar,  // Si vous n'en avez pas besoin, vous pouvez le retirer
    IonSpinner,  // Pour l'affichage du spinner dans le template
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;
  loading: boolean = false;  // Variable pour contrôler l'affichage du spinner

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    // Initialisation du formulaire avec deux champs : email et password
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
  
      // Active l'état de chargement (spinner visible)
      this.loading = true;
  
      // Simuler un délai asynchrone (par exemple 2 secondes)
      setTimeout(() => {
        try {
          // On appelle ici la méthode qui retourne un boolean.
          // Dans un vrai scénario, cette méthode devrait être asynchrone (retourner une promesse ou un observable).
          const isValid = this.authService.checkUserAndSendOtp(formData);
          // Désactive le spinner après le traitement simulé
          this.loading = true;
          if (isValid) {
            // Redirige vers la page loginotp en cas de succès
            this.router.navigate(['/loginotp']);
          } else {
            console.log('Invalid credentials');
          }
        } catch (error: any) {
          // En cas d'erreur, désactive le spinner et affiche l'erreur
          this.loading = false;
          console.error('Error during login', error);
        }
      }, 1000);  // Délai de 2000 ms pour la simulation
      
    } else {
      console.log('Form is invalid');
      // Marque tous les champs comme touchés pour déclencher les messages d'erreur
      this.loginForm.markAllAsTouched();
    }
  }
  
}
