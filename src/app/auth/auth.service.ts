import {LoginRequest} from '../login/login.request';


export interface AuthService {


  authenticate (loginRequest: LoginRequest );

}
