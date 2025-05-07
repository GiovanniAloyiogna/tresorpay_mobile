import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = environment.apiUrl;
  private apiGetAllSecteur = environment.apiUrl+'params-datas/liste-all-secteur';
  private apiGetByParamEnfant = environment.apiUrl+'params-datas/get-params-enfants';
  private apiGetBySlug = environment.apiUrl+'params-datas/get-by-slug';
  private apiGetModePaiement = environment.apiUrl+'mode-paiement/liste-all';
  private apiPostTransaction = environment.apiUrl+'transaction/create';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get('path');
  }

  getAllSecteurs(): Observable<any> {
    return this.http.get(this.apiGetAllSecteur);
  }

  getAllParamEnfantBySlugParent(slug: string): Observable<any> {
    const url = `${this.apiGetByParamEnfant}/${slug}`;
    return this.http.get(url);
  }

  getEtablissementBySlug(slug: string): Observable<any> {
    const url = `${this.apiGetBySlug}/${slug}`;
    return this.http.get(url);
  }

  getModePaiement(): Observable<any> {
    return this.http.get(this.apiGetModePaiement);
  }

  postData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}${data.url}`, data);
  }

  postTransaction(data: any): Observable<any> {
    return this.http.post(this.apiPostTransaction, data);
  }
}
