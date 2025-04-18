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
    canActivate: [AuthGuard],

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
  {
    path: 'dashboard/history',
    loadComponent: () => import('./history/history.page').then( m => m.HistoryPage)
  },
  {
    path: 'sector',
    loadComponent: () => import('./sector/sector.page').then( m => m.SectorPage)
  },

  {
    path: 'sectorform',
    loadComponent: () => import('./sectorform/sectorform.page').then( m => m.SectorformPage)
  },
  {
    path: 'inbox',
    loadComponent: () => import('./pages/inbox/inbox.page').then( m => m.InboxPage)
  },
  {
    path: 'outbox',
    loadComponent: () => import('./pages/outbox/outbox.page').then( m => m.OutboxPage)
  },
  {
    path: 'paymentmeduims',
    loadComponent: () => import('./paymentmeduims/paymentmeduims.page').then( m => m.PaymentmeduimsPage)
  },


];
