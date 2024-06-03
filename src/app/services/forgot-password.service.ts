import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private http: HttpClient) { }

  forgotPassword(email: string): Observable<any> {
     const params = new HttpParams().set('email', email);

     const url = `${environment.apiUrl}/forgot-password`;

     return this.http.post(url, params);
  }
}
