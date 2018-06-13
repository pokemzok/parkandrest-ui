import {LoginRequest} from '../login/login.request';


export interface Auth {

  authenticate (loginRequest: LoginRequest );

  deauthenticate();

  isAuthenticated(): boolean;
}
