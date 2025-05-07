import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiService } from './api.service';
import { LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
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

  constructor(
    private apiService: ApiService,
    private loadingController: LoadingController
  ) {}

  checkUserAndSendOtp(userData: {
    phoneNumber: string;
    password: string;
  }): Observable<boolean> {
    const payload = {
      username: userData.phoneNumber,
      password: userData.password,
      url: 'authentications/authenticate',
    };

    return new Observable<boolean>((observer) => {
      this.apiService.postData(payload).subscribe(
        (response) => {
          // Suppose que ton API répond avec succès et retourne des infos
          if (response.status) {
            localStorage.setItem(
              'pendingOtpUser',
              JSON.stringify(userData.phoneNumber)
            );
            observer.next(true);
          } else {
            observer.next(false);
          }
          observer.complete();
        },
        (error) => {
          console.error('Erreur API', error);
          observer.next(false);
          observer.complete();
        }
      );
    });
  }
  validateOtpAndLogin(code: string): Observable<boolean> {
    const payload = {
      username: JSON.parse(localStorage.getItem('pendingOtpUser') || '""'),
      secret: code,
      url: 'authentications/check-otp',
    };

    return new Observable<boolean>((observer) => {
      this.apiService.postData(payload).subscribe(
        (response) => {
          console.log('hello', payload);
          if (response.status) {
            const userToken = response.contenu?.Token;
            this.isAuthenticated.next(true);
            this.currentUser.next(response.contenu.user);

            localStorage.setItem('isAuthenticated', 'true');
            localStorage.setItem(
              'currentUser',
              JSON.stringify(response.contenu.user)
            );
            localStorage.removeItem('pendingOtpUser');

            observer.next(true);
          } else {
            observer.next(false);
          }
          observer.complete();
        },
        (error) => {
          console.error('Erreur API', error);
          observer.next(false);
          observer.complete();
        }
      );
    });
  }

  validateTransaction(data: any): Observable<boolean> {
    //const payload = { ...data, url: environment.apiUrl+'transaction/create' };
    
    return new Observable<boolean>((observer) => {
      this.loadingController
        .create({
          message: 'Veuillez patienter...',
          spinner: 'crescent',
        })
        .then((loader) => {
          loader.present();

          this.apiService.postTransaction(data).subscribe({
            next: (transaction) => {
              loader.dismiss();

              if(transaction.contenu.etat === 'SUCCES'){
                observer.next(!!transaction.contenu.etat);
                //observer.next(!!value.status);
                observer.complete();

                console.log("La trasaction e réussi");
              }
              else{
                console.log("La trasaction a echoué")
              }
              
            },
            error: (err)=> {
              console.error('Erreur API', err);
              loader.dismiss();
              observer.next(false);
              observer.complete();
            },
          })

        });
    });
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
