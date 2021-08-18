import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthResponse } from './auth-response.model';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode: boolean = false;
  loading: boolean = false;
  error: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onToggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  closeDialog($event: any) {
    console.log($event);
    console.log($event);
    this.error = null;
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
      this.loading = false;
      this.router.navigate(['/movies']);
    }, err => {
      this.error = err;     
      this.loading = false;
    })

    form.reset();
  }
}
