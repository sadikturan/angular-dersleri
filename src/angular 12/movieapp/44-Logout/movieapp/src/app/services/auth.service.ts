import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthResponse } from '../models/AuthResponse';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api_key = "AIzaSyA6vQHZyOcy9Xf2nSyX13L5GAlKD1OhfGg"
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient, private router: Router) { }

  signUp(email: string, password: string) {
    return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + this.api_key, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      tap(response => {
        const expirationDate = new Date(new Date().getTime() + (+response.expiresIn * 1000))

        const user = new User(
          response.email,
          response.localId,
          response.idToken,
          expirationDate
        );

        this.user.next(user);      
      })
    )
  }


  login(email: string, password: string) {
    return this.http.post<AuthResponse>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + this.api_key, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(
      tap(response => {
        const expirationDate = new Date(new Date().getTime() + (+response.expiresIn * 1000))

        const user = new User(
          response.email,
          response.localId,
          response.idToken,
          expirationDate
        );

        this.user.next(user);      
      })
    )
  }

  logout() {
    this.user.next(null);
    this.router.navigate(['/auth']);
  }

}
