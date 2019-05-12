# parkandrest-ui  [![Build Status](https://dev.azure.com/pokemzok/pokemzok/_apis/build/status/pokemzok.parkandrest-ui?branchName=master)](https://dev.azure.com/pokemzok/pokemzok/_build/latest?definitionId=9&branchName=master)


Frontend application made in angular 7 for educational purposes. You can use it fully client side, or with server available [here](https://github.com/pokemzok/parkandrest-kotlin). 
To use application in server mode go to environment.ts and set your SERVER_OFFLINE parameter like this:
```
 SERVER_OFFLINE: false
```
<p align="center">
    <img alt="start" src="https://raw.githubusercontent.com/pokemzok/parkandrest-ui/master/readme-img/start.gif" />
</p>  

## Key features:
1. Authentication based on cookies and redux like store. 
2. Reactive forms with custom validation.
3. Guarded routing which discovers home route based on authority. 
4. Modularization 

## Technological stack
1. Angular 7.0
2. Angular material
2. Bootstrap 3.3
3. Jasmine/Karma
4. Underscore
5. MomentJs (ngx-moment )
6. ngx-toastr 
7. ngx-modal 
8. ngx-cookie-service
8. @ngx-translate
9. @ngrx/store

## Project installation steps
1. Install nodejs (version 8.5.0 or higher) and npm (version 5.3.0 or higher)
2. Type npm install in "parkandrest-ui" catalogue

## How to run?
1. To run application type 'ng serve' in *parkandrest-ui* main catalogue
2. To run application test type 'ng test' in *parkandrest-ui* main catalogue

## Login
You can login using provided credentials (fulladmin would allow access to all application features):


| username		  | password       |authorities  				  |
|-------------|--------------|----------------------------|
| fulladmin		  | password 	   |ADMIN, OPERATOR, OWNER, DRIVER|
| admin		  	  | password 	   |ADMIN						  |
| operator		  | password 	   |OPERATOR					  | 
| driver		  | password 	   |DRIVER					  	  | 
| owner		  	  | password 	   |OWNER					  	  | 


## Application features
1. Manage application users. You can add new one and disable (or enable) existing one.  
<p align="center">
    <img alt="users" src="https://raw.githubusercontent.com/pokemzok/parkandrest-ui/master/readme-img/users.gif" />
</p>
2. Generate daily financial reports.  
<p align="center">
    <img alt="accounting-monitor" src="https://raw.githubusercontent.com/pokemzok/parkandrest-ui/master/readme-img/account-monitor.gif" />
</p>
3. Monitor parking spaces. Get and information about parking space state and what vehicle is currently parked.  
<p align="center">
    <img alt="parking-meter" src="https://raw.githubusercontent.com/pokemzok/parkandrest-ui/master/readme-img/parking-meter.gif" />
</p>
4. Access parking meter functionality. You can manually start and stop parking meter in order to mock external parking system which is not a part of this project.  
<p align="center">
    <img alt="driver-mock" src="https://raw.githubusercontent.com/pokemzok/parkandrest-ui/master/readme-img/driver-mock.gif" />
</p>
5. Get control over your server application time manager.   
<p align="center">
    <img alt="time-manager" src="https://raw.githubusercontent.com/pokemzok/parkandrest-ui/master/readme-img/time-manager.gif" />
</p>  
You can increment time by hours in order to test different time based scenarios. Warning! This feature is not available in client side mode and should not be used on the production. 
In order to make it work check the environment.ts file. Your ENVIRONMENT property should be set like this:

```
export const ENVIRONMENT = {
  PRODUCTION: false,
  SERVER_OFFLINE: false
}
```

## Feature by authorities table

| feature group  | required authority	
|----------------|--------------|
| Account monitor| OWNER	      |	  
| Parking meter  | OPERATOR		  |
| Users 	       | ADMIN		    |
| Driver Mock  	 | DRIVER		    |


## Known problems:
1. npm config set registry http://registry.npmjs.org/ - https keeps reseting network connection

## What is planned for the future:
* Routes lazy loading
* Custom fallback route - currently we always fallback to LogoutComponent
* Change or update of ngx-cookie-service because of nasty side effects (example here  https://github.com/7leads/ngx-cookie-service/issues/5) 
* Tests
* Prolonging session by using refresh token (currently in server mode, after token expiration you will be always logout )
