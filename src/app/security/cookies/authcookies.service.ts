import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {AuthorizationModel} from '../auth/authorization.model';
import {isNullOrUndefined} from 'util';
import {Authority} from '../auth/authority';
import * as _ from 'underscore';

// TODO: create a service which would monitor and destroys security Token when it times out
@Injectable()
export class AuthCookiesService {

  private static readonly AUTH_TOKEN_NAME = 'authToken';
  private static readonly AUTHORITIES_NAME = 'authorities';

  private _authToken: string;
  private _authorities: Authority[];

  constructor(private cookieService: CookieService  ) {
  }

  setAuthCookies(authModel: AuthorizationModel) {
    this._authToken = authModel.authenticationHeader;
    this._authorities = authModel.authorities;
    this.cookieService.set(AuthCookiesService.AUTH_TOKEN_NAME, this._authToken);
    this.cookieService.set(AuthCookiesService.AUTHORITIES_NAME, JSON.stringify(this._authorities));
  }

  clearAuthCookies() {
    this.cookieService.delete(AuthCookiesService.AUTH_TOKEN_NAME, '/');
    this.cookieService.delete(AuthCookiesService.AUTHORITIES_NAME, '/');
    this._authToken = null;
    this._authorities = null;
  }

  get authToken(): string {
    if (isNullOrUndefined(this._authToken)) {
      this._authToken = this.cookieService.get(AuthCookiesService.AUTH_TOKEN_NAME);
    }
    return this._authToken;
  }

  get authorities(): Authority[] {
    if (isNullOrUndefined(this._authorities)) {
      const unparsedAuthoritiesArrray = this.cookieService.get(AuthCookiesService.AUTHORITIES_NAME);
      if (!isNullOrUndefined(unparsedAuthoritiesArrray) && !_.isEmpty(unparsedAuthoritiesArrray)) {
        this._authorities = JSON.parse(this.cookieService.get(AuthCookiesService.AUTHORITIES_NAME));
      }
    }
    return this._authorities;
  }


}
