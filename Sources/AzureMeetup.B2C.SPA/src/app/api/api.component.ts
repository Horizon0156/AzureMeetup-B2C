import { Component, OnDestroy } from '@angular/core';
import { environment } from '../../environments/environment';
import { TestService } from '../services/test.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-api',
    templateUrl: './api.component.html'
})
export class ApiComponent implements OnDestroy {

    private _serviceSubscription: Subscription;
    public isLoading: boolean;
    public environment = environment;
    public response: string;

    constructor(private _testService: TestService) { }

    public ngOnDestroy(): void {
        
        if (this._serviceSubscription) {
            this._serviceSubscription.unsubscribe();
        }
    }

    public sendRequest(): void {

        this.isLoading = true;
        this._serviceSubscription = this._testService.Ping().subscribe(
            response => this.processResponse(response, null),
            error => this.processResponse(null, error));

    }

    private processResponse(response: string, error: any) {

        if (error) {

            this.response = JSON.stringify(error, null, 4);
        } else {
            this.response = response;
        }

        this.isLoading = false;
    }
}
