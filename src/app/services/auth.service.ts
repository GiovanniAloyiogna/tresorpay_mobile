import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(
    this.checkAuthentication()
  );
  private currentUser = new BehaviorSubject<any>(
    this.getCurrentUserFromStorage()
  );

  constructor() {}

  checkUserAndSendOtp(userData: { phoneNumber: string; password: string }): boolean {
    const fakeUser = { phone: '123456', mdp: 'azerty' };

    if (userData.phoneNumber === fakeUser.phone && userData.password === fakeUser.mdp) {
      console.log('COMPARAISON = TRUE');
      localStorage.setItem('pendingOtpUser', JSON.stringify(fakeUser));
      return true;
    } else {
      return false;
    }
  }

  validateOtpAndLogin(code: string): boolean {
    const correctCode = '123456';
    const storedUser = localStorage.getItem('pendingOtpUser');

    if (code === correctCode && storedUser) {
      const user = JSON.parse(storedUser);
      this.isAuthenticated.next(true);
      this.currentUser.next(user);

      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('currentUser', JSON.stringify(user));
      localStorage.removeItem('pendingOtpUser');

      return true;
    }

    return false;
  }

  isLoggedIn() {
    return this.isAuthenticated.asObservable();
  }

  getCurrentUser() {
    return this.currentUser.asObservable();
  }

  logout() {
    this.isAuthenticated.next(false);
    this.currentUser.next(null);

    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('currentUser');
  }

  private checkAuthentication(): boolean {
    return localStorage.getItem('isAuthenticated') === 'true';
  }

  private getCurrentUserFromStorage(): any {
    const user = localStorage.getItem('currentUser');
    return user ? JSON.parse(user) : null;
  }
}
