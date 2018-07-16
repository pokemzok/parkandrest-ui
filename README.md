# parkandrest-ui

Frontend application made in angular 6 for educational purposes. Current version is fully client-side (mocked services). 

###Key features:
1. Authentication based on cookies and redux like store. 
2. Reactive forms with custom validation.
3. Guarded routing which discovers home route based on authority. 

##Technological stack
1. Angular 6.0
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

##Project installation steps
1. Install nodejs (version 8.5.0 or higher) and npm (version 5.3.0 or higher)
2. Type npm install in "parkandrest-ui" catalogue

##How to run?
To run application type 'ng serve' in *parkandrest-ui* main catalogue
<br>
To run application test type 'ng test' in *parkandrest-ui* main catalogue

## Loggin in
1. Current version have hardcoded users inside of mockauth.service.ts (WARNING! Adding new user does not mean you could login using it's credentials, because mocks does not share user collections)
2. User with authorities necessary to see all features have credentials:

| username		  | password       |
|: ------------- :|:--------------:|
| fulladmin		  | password 	   |

##Known problems:
1. npm config set registry http://registry.npmjs.org/ - https keeps reseting network connection
2. Extracting routes from app-module is problematic. You can't store as a static param in class, you have to export the const to make it work (compilator limitarion)
3. ngx-cookie-service - sometimes will not delete a cookie, workaround is to provide an optional param (path) to method
4. angular migration from 5 to 6 destroyed test compatibility. Multiple solutions available here https://stackoverflow.com/questions/49831485/angular-6-and-karma-can-not-load-angular-devkit-build-angular-it-is-not-reg

##What is planned for the future:
* Real implementation of services which would use parkandrest application
* Make tables pageinable and sortable
* More tests
