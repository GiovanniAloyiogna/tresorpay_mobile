import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
  FormsModule,
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
import { InputOtpModule } from 'primeng/inputotp';
import {ButtonDirective} from "primeng/button";

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
    FormsModule,
    InputOtpModule,
    ButtonDirective,
  ],
})
export class LoginotpPage implements OnInit, AfterViewInit {
  otpForm!: FormGroup;
  inputOtpValue: string = '';
  remainingTime: string = '00:00:59';
  private countdownInterval: any;

  @ViewChild('otpInput') otpInputRef!: ElementRef;

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

  ngAfterViewInit(): void {
       setTimeout(() => {
      const firstInput: HTMLElement | null =
        this.otpInputRef?.nativeElement?.querySelector('input');
        console.log("inputs",this.otpInputRef?.nativeElement, this.otpInputRef?.nativeElement?.querySelector('input'))

      if (firstInput) {
        firstInput.focus();
      }
    }, 300);
  }

  onOtpChange(value: string) {
    this.inputOtpValue = value;

    if (value.length === 6) {
      this.onConfirmOtp();
    }
  }

  onConfirmOtp() {
    const code = this.inputOtpValue;

    if (code && code.length === 6) {

      const isSuccess = this.authService.validateOtpAndLogin(code);

      if (isSuccess) {
        // Reset OTP fields before redirection
        this.inputOtpValue = '';  // Clear OTP value
        this.otpForm.reset(); // Reset the form controls

        this.router.navigate(['/firstscreen']);  // Redirect to dashboard
      } else {
        console.log('Code OTP invalide');
      }
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
