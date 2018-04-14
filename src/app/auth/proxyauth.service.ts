import {Injectable} from '@angular/core';
import {MockAuthService} from './mockauth.service';
import {AuthService} from './auth.service';
import {LoginRequest} from '../login/login.request';
import {AuthenticationService} from './authentication.service';
import {AuthCookiesService} from './authcookies.service';
import {HttpClient} from '@angular/common/http';
import {HealthCheckService} from '../healthcheck/healthcheck.service';

@Injectable()
export class ProxyAuthService implements AuthService {

  private mockAuthService: MockAuthService;
  private authService: AuthenticationService;
  private selectedService: AuthService;

  constructor(private authCookiesService: AuthCookiesService, private http: HttpClient, private healthCheckService: HealthCheckService) {
    this.mockAuthService = new MockAuthService(this.authCookiesService);
    this.authService = new AuthenticationService(http, this.authCookiesService);
    this.selectAuthService(healthCheckService);
  }

  private selectAuthService(healthCheckService: HealthCheckService) { // TODO: handle production case
    if (healthCheckService.isServerOnline()) {
      this.selectedService = this.authService;
    } else {
      this.selectedService = this.mockAuthService;
    }
  }

  authenticate(loginRequest: LoginRequest) {
    this.selectedService.authenticate(loginRequest);
  }

  deauthenticate() {
    this.selectedService.deauthenticate()
  }

}
