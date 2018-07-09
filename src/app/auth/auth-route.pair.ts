import {Authority} from './authority';

// FIXME AuthorityComponent interface instead of T/ rename to AuthComponent
export class AuthRoutePair<T> {

  private _auth: Authority;
  private _component: T;

  constructor(auth: Authority, component: T) {
    this._auth = auth;
    this._component = component;
  }

  get auth(): Authority {
    return this._auth;
  }

  get component(): T {
    return this._component;
  }
}
