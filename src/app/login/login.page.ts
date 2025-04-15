import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  IonButton,
  IonLabel,
  IonInput,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar, 
  IonSpinner
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonLabel,
    IonInput,
    IonButton,
    IonHeader,
    IonTitle,
    IonToolbar,  
    IonSpinner,  
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;
  loading: boolean = false;  // Contrôle l'affichage du spinner

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      
      // Active le spinner
      this.loading = true;

      // Simule une action asynchrone de 1000 ms (1 seconde)
      setTimeout(() => {
        try {
          // Appel de la méthode qui vérifie les données utilisateur
          const isValid = this.authService.checkUserAndSendOtp(formData);
          
          if (isValid) {
            // Redirige vers la page loginotp en cas de succès
            this.router.navigate(['/loginotp']);
          } else {
            console.log('Invalid credentials');
          }
        } catch (error: any) {
          // En cas d'erreur, désactive le spinner et affiche l'erreur
          this.loading = true;
          console.error('Error during login', error);
        }
      }, 1000);  // Délai de 1000 ms

      // Désactive le spinner après 1000 ms
      setTimeout(() => {
        this.loading = false;
      }, 1000);  // Délai de 1000 ms pour arrêter le spinner après l'opération
    } else {
      console.log('Form is invalid');
      // Marque tous les champs comme touchés pour déclencher les messages d'erreur
      this.loginForm.markAllAsTouched();
    }
  }
}
