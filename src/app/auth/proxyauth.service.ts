import {Injectable} from '@angular/core';
import {MockAuthService} from './mockauth.service';
import {AuthService} from './auth.service';
import {LoginRequest} from '../login/login.request';
import {AuthenticationService} from './authentication.service';
import {AuthCookiesService} from './authcookies.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {TranslatedToastrFacade} from '../toaster/translated-toaster.service';

@Injectable()
export class ProxyAuthService implements AuthService {

  private mockAuthService: MockAuthService;
  private authService: AuthenticationService;
  private selectedService: AuthService;

  constructor(
    private authCookiesService: AuthCookiesService,
    private http: HttpClient,
    private toastrService: TranslatedToastrFacade
  ) {
    this.mockAuthService = new MockAuthService(this.authCookiesService, this.toastrService);
    this.authService = new AuthenticationService(http, this.authCookiesService);
    this.selectAuthService();
  }

  private selectAuthService() {
    if (environment.serverOffline) {
      this.toastrService.warning('notifications.serverOffline');
      console.log('Server is Offline Choosing Mock Authentication Service');
      this.selectedService = this.mockAuthService;
    } else {
      this.selectedService = this.authService;
    }
  }

  authenticate(loginRequest: LoginRequest) {
    this.selectedService.authenticate(loginRequest);
  }

  deauthenticate() {
    this.selectedService.deauthenticate();
  }

  isAuthenticated(): boolean {
    return this.selectedService.isAuthenticated();
  }
}
