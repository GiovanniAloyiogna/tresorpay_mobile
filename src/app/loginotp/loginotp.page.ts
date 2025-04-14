import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import {
  IonButton,
  IonLabel,
  IonInput,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-loginotp',
  templateUrl: './loginotp.page.html',
  styleUrls: ['./loginotp.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonLabel,
    IonInput,
    IonButton,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class LoginotpPage implements OnInit {
  otpForm!: FormGroup;
  remainingTime: string = '00:00:59';
  private countdownInterval: any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.startCountdown(59);
    this.otpForm = this.fb.group({
      digit1: ['', [Validators.required, Validators.pattern('[0-9]')]],
      digit2: ['', [Validators.required, Validators.pattern('[0-9]')]],
      digit3: ['', [Validators.required, Validators.pattern('[0-9]')]],
      digit4: ['', [Validators.required, Validators.pattern('[0-9]')]],
      digit5: ['', [Validators.required, Validators.pattern('[0-9]')]],
      digit6: ['', [Validators.required, Validators.pattern('[0-9]')]],
    });
  }

  onConfirmOtp() {
    if (this.otpForm.valid) {
      const code = Object.values(this.otpForm.value).join('');
      const isSuccess = this.authService.validateOtpAndLogin(code);

      if (isSuccess) {
        this.router.navigate(['/dashboard']);
      } else {
        console.log('Code OTP invalide');
      }
    } else {
      this.otpForm.markAllAsTouched();
    }
  }
  startCountdown(duration: number) {
    let timeLeft = duration;
  
    this.countdownInterval = setInterval(() => {
      const minutes = Math.floor(timeLeft / 60);
      const seconds = timeLeft % 60;
  
      this.remainingTime = `00:${this.pad(minutes)}:${this.pad(seconds)}`;
  
      if (timeLeft <= 0) {
        clearInterval(this.countdownInterval);
        this.remainingTime = '00:00:00';
      }
  
      timeLeft--;
    }, 1000);
  }
  
  pad(n: number): string {
    return n < 10 ? '0' + n : n.toString();
  }
}
