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
  IonSpinner, NavController,
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
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    IonButton,
    IonLabel,
    IonInput,
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonSpinner,
    CheckboxModule,
    InputTextModule,
    IconFieldModule,
    InputIconModule,
    FluidModule,
    ButtonModule,
    DrawerModule
  ]
})
export class RegisterPage implements OnInit {
  registerForm!: FormGroup;
  loading: boolean = false;
  visible = true;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private http: HttpClient,
    private navCtrl: NavController
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[0-9]*$')]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.pattern('^[0-9]*$')]],
    }, { validator: this.passwordMatchValidator });
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
      ? null
      : { mismatch: true };
  }

  onPasswordInput(event: any) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    input.value = value.replace(/[^0-9]/g, '');
    this.registerForm.get('password')?.setValue(input.value);
  }

  onConfirmPasswordInput(event: any) {
    const input = event.target as HTMLInputElement;
    const value = input.value;
    input.value = value.replace(/[^0-9]/g, '');
    this.registerForm.get('confirmPassword')?.setValue(input.value);
  }

  onRegister() {
    console.log(this.registerForm.value);
    if (this.registerForm.valid) {
      const formData = this.registerForm.value;
      this.loading = true;

      // Remove confirmPassword from the data sent to API
      const { confirmPassword, ...registrationData } = formData;

      this.http.post(`${environment.apiUrl}/compte/register`, registrationData).subscribe({
        next: (response) => {

          console.log("res:"+response);

          this.loading = false;
          this.router.navigate(['/login']);
        },
        error: (error) => {
          this.loading = false;
          console.error('Error during registration:', error);
        }
      });
    } else {
      console.log('Form is invalid');
      this.registerForm.markAllAsTouched();
    }
  }
  goBack() {
    this.navCtrl.back();
  }
}
