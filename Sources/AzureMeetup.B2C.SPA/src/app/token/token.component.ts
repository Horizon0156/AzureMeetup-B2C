import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { User } from 'msal';

@Component({
    selector: 'token',
    templateUrl: './token.component.html'
})
export class TokenComponent implements OnInit {

    public user: User;
    public expirationTime: string;

    constructor(private _authenticationService: AuthenticationService) { }

    public ngOnInit() {

        this.user = this._authenticationService.getCurrentUser();
        this.calculateExpirationTime();
        setInterval(() => this.calculateExpirationTime(), 1000);
    }

    private calculateExpirationTime(): string {

        if (!this.user) {
            return null;
        }
        let now = Date.now() / 1000;
        let expirationTimeUtc = this.user.idToken["exp"] as number;
        
        var balancedTimeInSeconds = expirationTimeUtc - now;
        
        this.expirationTime = `${(balancedTimeInSeconds / 60).toFixed(0)} min, ${(balancedTimeInSeconds % 60).toFixed(0)} sec. `
    }

    public prittyPrintAccessToken(): string {

        return this.user 
            ? JSON.stringify(this.user.idToken, null, 4)
            : "{}";
    }
}
