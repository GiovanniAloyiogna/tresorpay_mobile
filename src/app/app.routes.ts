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
    path: 'register',
    loadComponent: () => import('./register/register.page').then((m) => m.RegisterPage),
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
  {
    path: 'payment-option',
    loadComponent: () => import('./payment-option/payment-option.page').then( m => m.PaymentOptionPage)
  },
  {
    path: 'loader',
    loadComponent: () => import('./loader/loader.page').then( m => m.LoaderPage)
  },
  {
    path: 'bill',
    loadComponent: () => import('./bill/bill.page').then( m => m.BillPage)
  },
  {
    path: 'detailpaiement',
    loadComponent: () => import('./detail-transactions/detail-transactions.page').then( m => m.DetailTransactionsPage)
  },

  {
    path: 'validationpaiement',
    loadComponent: () => import('./validation-paiement/validation-paiement.page').then( m => m.ValidationPaiementPage)
  },  {
    path: 'receipt',
    loadComponent: () => import('./receipt/receipt.page').then( m => m.ReceiptPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage)
  },


];
