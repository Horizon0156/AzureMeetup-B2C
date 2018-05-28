# Azure Meetup Ruhrgebit - Azure Active Directory B2C
Meetup: https://www.meetup.com/de-DE/Azure-Ruhrgebiet/ 

## Remarks
Please adjust the environment configuration of the SPA as well as the application settings of the API project after setting up your B2C tenant on Azure. 

### environment.ts / environment.prod.ts (SPA)
```
export const environment = {

  production: false,
  azureB2CTenant: "yourtenant.onmicrosoft.com",
  azureB2CClientIdentifier: "12345678-1234-1234-1234-12345678",
  applicationScopes: [
    "https://yourtenant.onmicrosoft.com/demo/demo_app"
  ],
  passwordChangeEndpoint: "Insert the endpoint of your custom policy here",
  testApiEndpoint: "http://localhost:5000/api/ping",
  loginPolicy: "B2C_1_SuSi"
};
```

### appsettings.json (API)
```
"AzureB2C": {
    "Tenant": "yourtenant.onmicrosoft.com",
    "ClientId": "12345678-1234-1234-1234-12345678",
    "Policy": "B2C_1_SuSi"
  }
```

## AzureMeetup.B2C.API

This project was generated with [.NET Core](https://www.microsoft.com/net/learn/get-started/windows) version 2.0.5.

### Build

Run `dotnet restore` followed by `dotnet build` to build the project. The build artifacts will be stored in the `bin/` directory.

### Development server

Run `dotnet run` to host the API locally. Navigate to `http://localhost:5000/api/ping` to check the functionality. You will receive a 401 error until you have set up the settings of the B2C authority as well as passing a valid authentication token (see AzureMeetup.B2C.SPA API Demo).

## AzureMeetup.B2C.SPA

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.5.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `npm install` followed by `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Additional Resouces
