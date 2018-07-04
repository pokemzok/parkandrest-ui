import {Authority} from './authority';
import {Route} from '@angular/router';

export class AuthRoutePair {

  private _auth: Authority;
  private _route: Route;

  constructor(auth: Authority, route: Route) {
    this._auth = auth;
    this._route = route;
  }

  get auth(): Authority {
    return this._auth;
  }

  get route(): Route {
    return this._route;
  }
}
