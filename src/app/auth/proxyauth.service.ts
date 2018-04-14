import {Injectable} from '@angular/core';
import {MockAuthService} from './mockauth.service';
import {AuthService} from './auth.service';
import {LoginRequest} from '../login/login.request';
import {AuthenticationService} from './authentication.service';
import {AuthCookiesService} from './authcookies.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProxyAuthService implements AuthService {

  private mockAuthService: MockAuthService;
  private authService: AuthenticationService;
  private selectedService: AuthService;

  // TODO: after online check, choose service, also think about production mode
  constructor(private authCookiesService: AuthCookiesService, private http: HttpClient) {
    this.mockAuthService = new MockAuthService(this.authCookiesService);
    this.authService = new AuthenticationService(http, this.authCookiesService);
    // TODO: is server online check, after that use another Service (selectedService)
    this.selectedService = this.mockAuthService;
  }

  authenticate(loginRequest: LoginRequest) {
    this.selectedService.authenticate(loginRequest);
  }

  deauthenticate() {
    this.selectedService.deauthenticate()
  }

}
