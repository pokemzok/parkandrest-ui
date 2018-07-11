import {Authority} from './authority';
import * as _ from 'underscore';
import {isNullOrUndefined} from 'util';

export class AuthorizationModel {

  static empty(): AuthorizationModel {
    return new AuthorizationModel([Authority.NO_AUTHORITY], null);
  }

  static of(model: AuthorizationModel) {
    return new AuthorizationModel(_.toArray(model._authorities), model._authenticationHeader);
  }

  constructor (private _authorities: Authority[], private _authenticationHeader: string ) {}

  get authorities(): Authority[] {
    return _.toArray(this._authorities);
  }

  get authenticationHeader(): string {
    return this._authenticationHeader;
  }

  containsSecurityToken(): boolean {
    return !isNullOrUndefined(this._authorities) && !_.isEmpty(this._authenticationHeader);
  }

  containsAuthority(authority: Authority): boolean {
    return _.contains(this._authorities, authority);
  }

}
