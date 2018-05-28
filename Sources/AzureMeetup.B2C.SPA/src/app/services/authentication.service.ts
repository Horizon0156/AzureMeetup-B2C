import { Injectable } from '@angular/core';
import { UserAgentApplication, User } from 'msal';
import { Observable, from } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private _msal: UserAgentApplication;

    constructor() {

        this._msal = new UserAgentApplication(
            environment.azureB2CClientIdentifier,
            `https://login.microsoftonline.com/tfp/${environment.azureB2CTenant}/${environment.loginPolicy}`,
            this.handleAuthorizationResponse,
            {
                redirectUri: window.location.origin,
                navigateToLoginRequestUrl: false
            })
    }

    public isUserLoginValid(): boolean {

        let user = this._msal.getUser();

        return user != null;
    }

    public login(): void {

        this._msal.loginRedirect(environment.applicationScopes);
    }

    public logout(): void {

        this._msal.logout();
    }

    public getCurrentUser(): User {

        return this._msal.getUser();
    }

    public getTokenAsync(): Observable<string> {

        return from(this._msal.acquireTokenSilent(environment.applicationScopes));
    }

    private handleAuthorizationResponse(error: string, token: string): void {

        if (error) {

            console.error(error);
        }
    }
}
