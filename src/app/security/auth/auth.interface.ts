import {LoginRequest} from '../../authentication/login/login.request';


export interface Auth {

  authenticate (loginRequest: LoginRequest );

  deauthenticate();

}
