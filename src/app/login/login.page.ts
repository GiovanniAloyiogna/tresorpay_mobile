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
  IonToolbar,
  IonSpinner,
} from '@ionic/angular/standalone';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { FluidModule } from 'primeng/fluid';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonLabel,
    IonInput,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonSpinner,
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    DrawerModule,
    CheckboxModule,
    InputTextModule,
    FormsModule,
    RouterModule,
    IconFieldModule,
    InputIconModule,

    FluidModule,

  ],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;
  loading: boolean = false;
  visible = true;

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
      this.loading = true;

      setTimeout(() => {
        try {
          const isValid = this.authService.checkUserAndSendOtp(formData);
          if (isValid) {
            this.router.navigate(['/loginotp']);
          } else {
            console.log('Invalid credentials');
          }
        } catch (error: any) {
          console.error('Error during login', error);
        }
      }, 1000);

      setTimeout(() => {
        this.loading = false;
      }, 1000);
    } else {
      console.log('Form is invalid');
      this.loginForm.markAllAsTouched();
    }
  }


}
