import {Authority} from './authority';
import {AuthorityComponent} from './authority.component';
import {Type} from '@angular/core';

export class AuthComponentTypePair {

  private _auth: Authority;
  private _component: Type<AuthorityComponent>;

  constructor(auth: Authority, component: Type<AuthorityComponent>) {
    this._auth = auth;
    this._component = component;
  }

  get auth(): Authority {
    return this._auth;
  }

  get component(): Type<AuthorityComponent> {
    return this._component;
  }
}
