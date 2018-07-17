import {LoginComponent} from './authentication/login/login.component';
import {Routes} from '@angular/router';
import {Route} from '@angular/router/src/config';
import {Injectable, Type} from '@angular/core';
import {Optional} from './common/optional/optional';
import * as _ from 'underscore';
import {ROUTES_DEFINITIONS} from './routes-definitions';
import {AuthorityComponentInterface} from './security/auth/authority-component.interface';
import {RoutesWithComponentCollection} from './security/routing/routes-with-component.collection.interface';

/**
 * Singleton class for making operation on routes definitions array
 */
@Injectable()
export class RoutesDefinitionsCollection implements RoutesWithComponentCollection {

  private static readonly instance: RoutesDefinitionsCollection;

  private readonly _routes: Routes;

  static getInstance(): RoutesDefinitionsCollection {
    if (!this.instance) {
      return new RoutesDefinitionsCollection();
    }
  }

  // FIXME ROUTES_DEFINITION jako parametr?
  constructor() {
    this._routes = ROUTES_DEFINITIONS;
  }

  routes(): Routes {
    return this._routes;
  }

  getLoginRoute(): Route {
    return this.getFirstRouteByComponent(LoginComponent);
  }

// TODO: Testme
  getFirstRouteByComponent(componentType: Type<AuthorityComponentInterface>): Route {
    const routes = this._routes;
    const componentRoutes = Optional.of(
      _.where(routes, {component: componentType})
    ).getOrProvide(function () {
      return [routes[0]];
    });
    return componentRoutes[0];
  }

}
