import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html'
})
export class NavigationComponent implements OnInit {

    public isUserLoggedIn: boolean;

    constructor(private _authenticationService: AuthenticationService) { }

    public ngOnInit(): void {
        this.isUserLoggedIn = this._authenticationService.isUserLoginValid();
    }

    public login(): void {
        this._authenticationService.login();
    }

    public logout(): void {
        this._authenticationService.logout();
    }

}
