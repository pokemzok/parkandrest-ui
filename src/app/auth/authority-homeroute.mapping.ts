import {Authority} from './authority';
import {Route} from '@angular/router';

export class AuthorityHomerouteMapping {

  private static mapping = [ new AuthRoutePair(Authority.OWNER, {}) // FIXME, nabij to

  ];

  static get() {

  }

}

export class AuthRoutePair {

  private auth: Authority;
  private route: Route;

  constructor(auth: Authority, route: Route) {
    this.auth = auth;
    this.route = route;
  }

}
