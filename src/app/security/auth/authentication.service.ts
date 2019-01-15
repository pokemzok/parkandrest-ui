import {LoginRequest} from './login.request';
import {Auth} from './auth.interface';
import {Inject, Injectable} from '@angular/core';
import {LOGIN_URL, LOGOUT_URL, SECURITY_CONFIG} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthorizationModel} from './authorization.model';
import {Authority} from './authority';
import {TranslatedToastrFacade} from '../../common/toaster/translated-toaster.service';
import {RoutesWithComponentCollection} from '../routes/routes-with-component.collection.interface';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {AuthCookiesService} from '../cookies/authcookies.service';
import {Authenticate} from '../store/actions/authenticate';
import {Deauthenticate} from '../store/actions/deauthenticate';
import {SecureHttpService} from '../http/secure-http.service';
import {SecureRequest} from '../http/secure-request';
import { Location } from '@angular/common';
import {AuthToken} from './auth.token';

@Injectable()
export class AuthenticationService implements Auth {

  private GRANT_TYPE  = 'password';

  constructor(
    private http: HttpClient,
    private authCookiesService: AuthCookiesService,
    private toasterService: TranslatedToastrFacade,
    @Inject('RoutesWithComponentCollection') private routesCollection: RoutesWithComponentCollection,
    private router: Router,
    private authStore: Store<AuthorizationModel>,
    private secureHttp: SecureHttpService,
    private location: Location) {
  }

  authenticate(login: LoginRequest) {
    const params = new URLSearchParams();
    params.append('username', login.username);
    params.append('password', login.password);
    params.append('grant_type', this.GRANT_TYPE);
    params.append('client_id', SECURITY_CONFIG.CLIENT_ID);

    const headers = new HttpHeaders()
      .set('Content-type', 'application/x-www-form-urlencoded; charset=utf-8' )
      .set('Authorization', 'Basic ' + btoa( SECURITY_CONFIG.CLIENT_ID + ':' + SECURITY_CONFIG.CLIENT_PASSWORD));

    this.http.post(
      LOGIN_URL,
      params.toString(),
      {
        headers: headers
      }
    ).subscribe(result => {
        this.toasterService.success('notifications.authenticated');
        const authorization = this.authorizationModel( result as AuthResponse, login);
        this.authCookiesService.setAuthCookies(authorization);
        this.authStore.dispatch(new Authenticate(authorization));
        const selectedRoute = this.routesCollection.getFirstRouteByAuthorities(authorization.authorities);
        this.router.navigateByUrl(selectedRoute.path);
      },
      error => {
        this.toasterService.error('notifications.authfailure', {status: error.status} );
      });
  }

  private authorizationModel(response: AuthResponse, login: LoginRequest): AuthorizationModel {
    const token = new AuthToken(response.token_type, response.access_token, response.expires_in, response.refresh_token);
    const authorities = Authority.of(response.authorities);
    return new AuthorizationModel(authorities, token.authorizationHeader, login.username); // FIXME, save all token information
  }

  deauthenticate() {
    this.secureHttp.delete( new SecureRequest(LOGOUT_URL)).subscribe(
      () => {
        this.authCookiesService.clearAuthCookies();
        this.authStore.dispatch(new Deauthenticate());
        const loginRoute = this.routesCollection.getLoginRoute();
        this.router.navigateByUrl(loginRoute.path);
      },
      error => {
        console.error('Failed to logout');
        console.log(error);
        this.location.back();
      }
    );
  }
}
