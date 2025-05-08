import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { IonContent } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { ButtonDirective } from 'primeng/button';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ErrorModalComponent } from '../error-modal/error-modal.component'; // Import your modal component

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ErrorModalComponent,
    ButtonDirective,
  ],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private modalController: ModalController,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      phoneNumber: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  async onLogin() {
    if (this.loginForm.valid) {
      const formData = this.loginForm.value;
      this.loading = true;

      setTimeout(async () => {
        try {
          this.authService.checkUserAndSendOtp(formData).subscribe(
            async (isValid) => {
              if (isValid) {
                this.router.navigate(['/loginotp']);
              } else {
                // Show the modal with the error message
                await this.presentAlert('Invalid credentials');
              }
            },
            async (error) => {
              console.error('Error during login', error);
              // Show the modal with the error message
              await this.presentAlert('Error during login');
              // this.presentErrorModal('An error occurred during login');
            }
          );
        } catch (error: any) {
          await this.presentAlert('Error during login');
        }
      }, 1000);

      setTimeout(() => {
        this.loading = false;
      }, 1000);
    } else {
      await this.presentAlert('Error during login');
      this.loginForm.markAllAsTouched();
    }
  }

  async presentErrorModal(message: string) {
    
    const modal = await this.modalController.create({
      component: ErrorModalComponent,
      componentProps: { errorMessage: message },
    });

    return await modal.present();
  }
  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      header: 'Erreur',
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
