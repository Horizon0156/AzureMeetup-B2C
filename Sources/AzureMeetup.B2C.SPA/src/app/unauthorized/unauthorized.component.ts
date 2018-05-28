import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
    selector: 'app-unauthorized',
    templateUrl: './unauthorized.component.html'
})
export class UnauthorizedComponent {

    constructor(private _authenticationService: AuthenticationService) { }

    public login(): void {

        this._authenticationService.login();
    }
}
