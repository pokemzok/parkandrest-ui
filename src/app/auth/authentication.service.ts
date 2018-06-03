import {LoginRequest} from '../login/login.request';
import {HttpClient} from '@angular/common/http';
import {AuthService} from './auth.service';
import {AuthCookiesService} from './authcookies.service';
import {AuthorizationModel} from './authorization.model';
import {LOGIN} from '../../environments/environment';
import {isNullOrUndefined} from 'util';

export class AuthenticationService implements  AuthService {

  constructor(private http: HttpClient, private authCookiesService: AuthCookiesService) {
  }

  authenticate(login: LoginRequest) {
    this.http.post(
      LOGIN,
      JSON.stringify(login),
      {responseType: 'text', observe: 'response'}
    ).subscribe(result => {
      console.log('Error with status:');
      console.log(result);
      // FIXME extract from response AuthorizationModel and pass it to authCookiesService
      this.authCookiesService.setAuthCookies(new AuthorizationModel( [], ''));
    }, error => {
      console.log('I am here');
      console.log(error.status);
    });
  }

  deauthenticate() {
    this.authCookiesService.clearAuthCookies();
    // TODO: another things
  }

  isAuthenticated(): boolean {
    return !isNullOrUndefined(this.authCookiesService.authToken);
  }

}
