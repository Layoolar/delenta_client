import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { PostDto } from '../Dto/post-dto';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }

  postComment(iPost: PostDto): Observable<any> {
    const body = { data: iPost };
    return this.http.post<any>(environment.apiUrl + "/post", body, { headers: this.getHeaders() })
      .pipe(catchError(this.errorHandler));
  }

  getComment(userName?: string): Observable<any> {
    const url = environment.apiUrl + "/post?";
    let query = '';
    if (userName) {
      query += `userName=${userName}&`;
    }
    return this.http.get<any>(url + query, { headers: this.getHeaders() })
      .pipe(catchError(this.errorHandler));
  }

  getAllComment(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + "/post", { headers: this.getHeaders()})
      .pipe(catchError(this.errorHandler));
  }

  getPostByUserName(): Observable<any> {
    return this.http.get<any>(environment.apiUrl + "/account",  { headers: this.getHeaders()})
    .pipe(catchError(this.errorHandler));
  }

  getPostById(userId: string) {
    const url = environment.apiUrl + `/account/${userId}`;
    return this.http.get(url, {headers: this.getHeaders()})
    .pipe(catchError(this.errorHandler));
  }

 deletePost(userId: string): Observable<any> {
    const url = `${environment.apiUrl}/post/${userId}`;
    console.log(url);
    return this.http.delete(url, { headers: this.getHeaders() })
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
