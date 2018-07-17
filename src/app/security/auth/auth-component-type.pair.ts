import {Authority} from './authority';
import {AuthorityComponentInterface} from './authority-component.interface';
import {Type} from '@angular/core';

export class AuthComponentTypePair {

  private _auth: Authority;
  private _component: Type<AuthorityComponentInterface>;

  constructor(auth: Authority, component: Type<AuthorityComponentInterface>) {
    this._auth = auth;
    this._component = component;
  }

  get auth(): Authority {
    return this._auth;
  }

  get component(): Type<AuthorityComponentInterface> {
    return this._component;
  }
}
