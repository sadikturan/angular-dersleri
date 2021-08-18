import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponse } from '../models/AuthResponse';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode: boolean = false;
  loading: boolean = false;
  error: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onToggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    if(form.invalid) 
      return;
    
    const email = form.value.email;
    const password = form.value.password;

    this.loading = true;

    let authResponse: Observable<AuthResponse>;

    if(this.isLoginMode) {
      authResponse = this.authService.login(email, password)
    } else {
      authResponse = this.authService.signUp(email, password)
    }

    authResponse.subscribe(response => {
      console.log(response);
      this.loading = false;
    }, err => {
      this.error = err;     
      this.loading = false;
    })

    form.reset();
  }
}
