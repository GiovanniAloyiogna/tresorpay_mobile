import { Routes } from '@angular/router';
import { AuthGuard } from './services/guard.service';
import { NoAuthGuard } from './services/no-auth-gaurd.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'logout',
    loadComponent: () =>
      import('./logout/logout.component').then((m) => m.LogoutComponent),
  },
  {
    path: 'firstscreen',
    loadComponent: () =>
      import('./firstscreen/firstscreen.page').then((m) => m.FirstscreenPage),
    canActivate: [NoAuthGuard],
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then((m) => m.LoginPage),
    canActivate: [NoAuthGuard],
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.page').then((m) => m.DashboardPage),
    canActivate: [AuthGuard],
  },
  {
    path: 'loginotp',
    loadComponent: () =>
      import('./loginotp/loginotp.page').then((m) => m.LoginotpPage),
    canActivate: [NoAuthGuard],
  },
];
