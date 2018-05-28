import { Route } from '@angular/router'
import { AuthenticationGuard } from './services/authentication-guard';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { HomeComponent } from './home/home.component';
import { TokenComponent } from './token/token.component';
import { ApiComponent } from './api/api.component';

export const routes: Route[] = [

    {
        path: "",
        pathMatch: "full",
        redirectTo: "home"
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "unauthorized",
        component: UnauthorizedComponent
    },
    {
        path: "token",
        component: TokenComponent,
        canActivate: [ AuthenticationGuard ]
    }, 
    {
        path: "api",
        component: ApiComponent
    }
]