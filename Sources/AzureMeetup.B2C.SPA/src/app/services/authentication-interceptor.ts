import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpHandler, HttpSentEvent, HttpRequest, HttpEvent } from "@angular/common/http"
import { AuthenticationService } from "./authentication.service";
import { Observable } from "rxjs";
import { flatMap } from "rxjs/operators";

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

    constructor(private _authenticationService: AuthenticationService) {

    }

    public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        if (this._authenticationService.getCurrentUser() == null) {

            return next.handle(request);
        }
        
        return this._authenticationService.getTokenAsync().pipe(flatMap(token => {

            var interceptedRequest = request.clone({
                headers: request.headers.append("Authorization", `Bearer ${token}`)
            });

            return next.handle(interceptedRequest);
        }));
    }
}