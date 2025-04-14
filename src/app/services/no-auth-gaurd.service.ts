import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    let isAuthenticated = false;
    this.authService.isLoggedIn().subscribe(authState => {
      isAuthenticated = authState;
    });

    if (isAuthenticated) {
      // Redirect to dashboard if the user is authenticated
      this.router.navigate(['/dashboard']);
      return false;
    }

    return true;  // Allow access to the login page if the user is not logged in
  }
}
