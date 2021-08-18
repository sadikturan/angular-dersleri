import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthResponse } from '../models/AuthResponse';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api_key = "AIzaSyA6vQHZyOcy9Xf2nSyX13L5GAlKD1OhfGg"

  constructor(private http: HttpClient) { }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + this.api_key, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      catchError(this.handleError)
    );
  }


  login(email: string, password: string) {
    return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + this.api_key, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(response: HttpErrorResponse) {
    let message = "hata oluştu.";

    if(!navigator.onLine) {
      message = "internet bağlantınız yok."
      return throwError(message);
    }

    if(response.error.error) {
      switch(response.error.error.message) {
        case "EMAIL_EXISTS":
          message = "mail adresi kullanılmış";
          break;

        case "EMAIL_NOT_FOUND":
          message = "mail adresi bulunamadı";
          break;

        case "INVALID_PASSWORD":
          message = "hatalı parola";
          break;
      }
    }

    return throwError(message);
  }

}
