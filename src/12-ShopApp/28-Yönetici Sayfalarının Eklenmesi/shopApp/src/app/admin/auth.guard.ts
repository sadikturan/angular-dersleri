import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../model/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthService){}
    
    canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot) {

        if(!this.authService.authenticated) {
            this.router.navigateByUrl('/admin/auth');
            return false;
        }
        return true;
    }
}