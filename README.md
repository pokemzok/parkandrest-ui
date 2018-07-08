# parkandrest-ui

UI made in angular for the parkandrest aplication

##Project installation steps
1. Install nodejs 8.9.3 and npm 5.5.1 
2. Type npm install in "parkandrest-ui" catalogue

##How to run?
To run application type 'ng serve' in *parkandrest-ui* main catalogue
<br>
To run application test type 'ng test' in *parkandrest-ui* main catalogue

##Known problem:
1. npm config set registry http://registry.npmjs.org/ - https keeps reseting network connection
2. Extracting routes from app-module is problematic. You can't store as a static param in class, you have to export the const to make it work (compilator limitarion)
3. ngx-cookie-service - sometimes will not delete a cookie, workaround is to provide an optional param (path) to method
4. angular migration destroyed test compatibility
5. use Enums with caution because they work quite differently than in Java

##TODO:
* mocki
* naprawić testy karma w intellij, bo przestały dzialać. Poza intellij działa
* prezentacja na temat karmy i testowania js'ow bo wydaje sie to byc bardzo fajne
* przez angulara krzaczą się testy (router na przykład)
