import {LoginRequest} from '../../authentication/login/login.request';
import {Auth} from './auth.interface';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthenticationService implements  Auth {

  constructor() {
  }

  authenticate(login: LoginRequest) {
    alert('Implement me');
  }

  deauthenticate() {
    alert('Implement me');
  }

}
