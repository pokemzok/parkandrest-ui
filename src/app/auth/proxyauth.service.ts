import {Injectable} from '@angular/core';
import {MockAuthService} from './mockauth.service';
import {AuthService} from './auth.service';
import {LoginRequest} from '../login/login.request';

@Injectable()
export class ProxyAuthService implements AuthService {

  // TODO: after online check, choose service, also think about production mode
  constructor(private mockAuthService: MockAuthService, private authService: AuthService) {}

  authenticate(loginRequest: LoginRequest) {
    this.mockAuthService.authenticate(loginRequest);
  }

  deauthenticate() {
    this.mockAuthService.deauthenticate()
  }

}
