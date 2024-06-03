import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { ProfileDto } from '../Dto/user-dto';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  editProfile(iProfile: ProfileDto): Observable<any> {
    const body = { data: iProfile };
    return this.http.post<any>(environment.apiUrl + "/account/update-info", body, { headers: this.getHeaders() })
      .pipe(catchError(this.errorHandler));
  }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');
    if (token) {
      return new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      });
    }
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  private errorHandler(error: HttpErrorResponse): Observable<never> {
    return throwError(error);
  }
}
