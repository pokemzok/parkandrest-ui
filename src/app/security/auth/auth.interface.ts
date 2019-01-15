import {LoginRequest} from './login.request';


export interface Auth {

  authenticate (loginRequest: LoginRequest );

  deauthenticate();

}
