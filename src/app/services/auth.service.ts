import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,  HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { VerifyDto } from '../Dto/signin-dto';
import { SignUpDto } from '../Dto/signin-dto';
import { SignInDto } from '../Dto/signin-dto';
import { UpdatePasswordDto } from "../Dto/signin-dto";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) { }

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

  forgotPassword(): Observable<any> {
    const email = 'olaiwolaayoola@gmail.com';

    const url = `${environment.apiUrl}/account/forgot-password/${email}`;

    return this.http.post(url, {headers: this.getHeaders()});
 }

  banUser(userId: string): Observable<any> {
    const body = { data: userId }
    const url = `${environment.apiUrl}/admin/account/ban/${userId}`;


    return this.http.post(url, {body}, {headers: this.getHeaders()});
  }

  // sign up
  signUpUser(iSignUp: SignUpDto): Observable<any> {
    const body = { data: iSignUp }
    return this.http.post<any>(environment.apiUrl + "/account/signup", body, { headers: this.getHeaders() });
  }


  login(iLogin: SignInDto): Observable<any> {
    const body = { data: iLogin };
    return this.http.post<any>(environment.apiUrl + "/account/login", body, { headers: this.getHeaders() })
  }

  updatePassword(iUpdate: UpdatePasswordDto): Observable<any> {
    const body = { data: iUpdate };
    return this.http.post(environment.apiUrl + "/account/update-password", body,  { headers: this.getHeaders() });
  }

  verifyEmail(iVerify: VerifyDto): Observable<any> {
    const body = { data: iVerify };
    return this.http.post(environment.apiUrl + "/account/verify-otp", body, {headers: this.getHeaders()});
  }


  storeToken(tokenValue: string) {
    localStorage.setItem('authToken', tokenValue);
  }

  getToken() {
    return localStorage.getItem('authToken');
  }

  getUserInfo(token: string) {
    if (token) {
      return JSON.parse(atob(token.split('.')[1]));
    }
  }

  setEmail(email: string) {
    return localStorage.setItem('email', email);
  }
  getEmail() {
    return localStorage.getItem('email');
  }

  setUserName(username: string) {
    return localStorage.setItem('username', username);
  }
  getUserName(): string {
    return localStorage.getItem('username') || 'Anonymous';
  }
  setFirstName(firstname: string) {
    return localStorage.setItem('firstname', firstname);
  }
  getFirstName() {
    return localStorage.getItem('firstname');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  isAdmin(): boolean {
    const token = this.getToken();
    if (token) {
      const userInfo = this.getUserInfo(token);
      return userInfo && userInfo.role === 'admin';
    }
    return false;
  }

  logout() {
    localStorage.removeItem('authToken');
  }


  clear() {
    localStorage.clear();
  }

  // Error Handler
  errorHandler(error: HttpErrorResponse) {
    return throwError(error);
  }
}
