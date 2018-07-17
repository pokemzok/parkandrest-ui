import {LoginComponent} from '../../authentication/login/login.component';
import {Routes} from '@angular/router';
import {Route} from '@angular/router/src/config';
import {Type} from '@angular/core';
import {Optional} from '../../common/optional/optional';
import * as _ from 'underscore';
import {ROUTES_DEFINITIONS} from '../../routes-definitions';
import {AuthorityComponent} from '../auth/authority.component';

/**
 * Singleton class for making operation on routes definitions array
 */
export class RoutesDefinitionsCollection {

  private static readonly instance: RoutesDefinitionsCollection;

  private  readonly _routes: Routes;

  static getInstance(): RoutesDefinitionsCollection {
    if (!this.instance) {
      return new RoutesDefinitionsCollection();
    }
  }

  private constructor() {
    // workaround, angular compiler does not allow to declare routes in class (https://github.com/angular/angular-cli/issues/3841).
    this._routes = ROUTES_DEFINITIONS;
  }

  get routes(): Routes {
    return this._routes;
  }

  getLoginRoute(): Route {
    return this.getFirstRouteByComponent(LoginComponent); // FIXME, ten modul nie powinien o tym wiedziec, a jesli powinien, to musi byc spiety razem z authentication a tego bysmy nie chcieli
  }

// TODO: Testme
  getFirstRouteByComponent(componentType: Type<AuthorityComponent>): Route {
    const componentRoutes = Optional.of(
      _.where(this._routes, {component: componentType})
    ).getOrProvide(function () {
      return [this.routes[0]];
    });
    return componentRoutes[0];
  }

}
