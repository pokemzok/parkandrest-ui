import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {AuthorizationModel} from './authorization.model';
import {isNullOrUndefined} from 'util';

@Injectable()
export class AuthCookiesService {

  private static readonly  authTokenName = 'authToken';
  private static readonly authoritiesName = 'authorities';

  // TODO: add username
  private _authToken: string;
  private _authorities: string;

  constructor (private cookieService: CookieService) {}

  setAuthCookies(authModel: AuthorizationModel) {
    this._authToken = authModel.authenticationHeader;
    this._authorities = authModel.authorities.toString(); // TODO check result
    this.cookieService.set(AuthCookiesService.authTokenName, this._authToken);
    this.cookieService.set(AuthCookiesService.authoritiesName, this._authorities);
  }

  clearAuthCookies() {
    this.cookieService.delete(AuthCookiesService.authTokenName);
    this.cookieService.delete(AuthCookiesService.authoritiesName);
  }

  get authToken(): string {
    if (isNullOrUndefined(this._authToken)) {
      this._authToken = this.cookieService.get(AuthCookiesService.authTokenName);
    }
    return this._authToken;
  }

  get authorities(): string {
    if (isNullOrUndefined(this._authorities)) {
      this._authorities = this.cookieService.get(AuthCookiesService.authoritiesName);
    }
    return this._authorities;
  }
}
