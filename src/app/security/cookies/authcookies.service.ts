import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {AuthorizationModel} from '../auth/authorization.model';
import {isNullOrUndefined} from 'util';
import {Authority} from '../auth/authority';
import * as _ from 'underscore';

// TODO: cookie expiration date after server implementation
@Injectable()
export class AuthCookiesService {

  private static readonly AUTH_TOKEN_NAME = 'authToken';
  private static readonly AUTHORITIES_NAME = 'authorities';

  constructor(private cookieService: CookieService) {
  }

  setAuthCookies(authModel: AuthorizationModel) {
    this.clearAuthCookies();
    this.cookieService.set(AuthCookiesService.AUTH_TOKEN_NAME, authModel.authenticationHeader);
    this.cookieService.set(AuthCookiesService.AUTHORITIES_NAME, JSON.stringify(authModel.authorities));
  }

  clearAuthCookies() {
    this.cookieService.delete(AuthCookiesService.AUTH_TOKEN_NAME);
    this.cookieService.delete(AuthCookiesService.AUTHORITIES_NAME);
  }

  authToken(): string {
    return  this.cookieService.get(AuthCookiesService.AUTH_TOKEN_NAME);
  }

  authorities(): Authority[] {
    const unparsedAuthoritiesArrray = this.cookieService.get(AuthCookiesService.AUTHORITIES_NAME);
    if (!isNullOrUndefined(unparsedAuthoritiesArrray) && !_.isEmpty(unparsedAuthoritiesArrray)) {
      return JSON.parse(unparsedAuthoritiesArrray);
    }
    return [];
  }


}
