import {Authority} from './authority';
import * as _ from 'underscore';
import {isNullOrUndefined} from 'util';

// FIXME adapt this class to use AuthToken ( also adapt MockAuthService and AuthCookiesService
export class AuthorizationModel {

  static empty(): AuthorizationModel {
    return new AuthorizationModel([Authority.NO_AUTHORITY], null, null);
  }

  static of(model: AuthorizationModel) {
    return new AuthorizationModel(_.toArray(model._authorities), model._authenticationHeader, model._username);
  }

  constructor (private _authorities: Authority[], private _authenticationHeader: string, private _username: string ) {}

  get authorities(): Authority[] {
    return _.toArray(this._authorities);
  }

  get authenticationHeader(): string {
    return this._authenticationHeader;
  }

  get username(): string {
    return this._username;
  }

  containsSecurityToken(): boolean {
    return !isNullOrUndefined(this._authenticationHeader) && !_.isEmpty(this._authenticationHeader);
  }

  containsAuthority(authority: Authority): boolean {
    return _.contains(this._authorities, authority);
  }

}
