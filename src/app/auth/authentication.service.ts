import {LoginRequest} from '../login/login.request';
import {HttpClient} from '@angular/common/http';
import {Auth} from './auth.interface';
import {AuthCookiesService} from './cookies/authcookies.service';
import {AuthorizationModel} from './authorization.model';
import {LOGIN} from '../../environments/environment';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthenticationService implements  Auth {

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

}
