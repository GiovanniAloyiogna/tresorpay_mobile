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

  postData(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}${data.url}`, data);
  }
}
