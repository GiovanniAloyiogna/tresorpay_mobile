import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(this.checkAuthentication());  // Start with value from localStorage
  private currentUser = new BehaviorSubject<any>(this.getCurrentUserFromStorage());  // Get user from localStorage

  constructor() { }

  
  login(userData: { email: string, password: string }) {
    const fakeUser = { email: 'test@example.com', password: 'password123' };  

    if (userData.email === fakeUser.email && userData.password === fakeUser.password) {
     
      this.isAuthenticated.next(true);
      this.currentUser.next(fakeUser); 

   
      localStorage.setItem('isAuthenticated', 'true');
      localStorage.setItem('currentUser', JSON.stringify(fakeUser));
    } else {
    
      this.isAuthenticated.next(false);
      this.currentUser.next(null);

     
      localStorage.removeItem('isAuthenticated');
      localStorage.removeItem('currentUser');
    }
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
