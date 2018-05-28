import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TestService {

    constructor(private _httpClient: HttpClient) { 

    }

    public Ping(): Observable<string> {

        return this._httpClient.get(environment.testApiEndpoint, {responseType: "text"} );
    }
}
