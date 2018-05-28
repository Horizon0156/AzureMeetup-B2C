import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
    
    constructor(
        private _authenticationService: AuthenticationService,
        private _router: Router) {
    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        
        let isUserLoginValid = this._authenticationService.isUserLoginValid();
        
        if (!isUserLoginValid) {

            this._router.navigate(["/unauthorized"]);
            console.warn("User is not logged in.");
        }

        return isUserLoginValid;
    }
}
