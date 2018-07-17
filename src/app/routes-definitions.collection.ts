import {LoginComponent} from './authentication/login/login.component';
import {Routes} from '@angular/router';
import {Route} from '@angular/router/src/config';
import {Type} from '@angular/core';
import {Optional} from './common/optional/optional';
import * as _ from 'underscore';
import {AuthorityComponent} from './security/auth/authority.component';
import {RoutesWithComponentCollection} from './security/routing/routes-with-component.collection.interface';

/**
 * Would behave correctly only for component driven routes where every component is an AuthorityComponent
 */
export class RoutesDefinitionsCollection implements RoutesWithComponentCollection {

  private readonly _routes: Routes;

  constructor(routesWithAuthorityComponent: Routes) {
    this._routes = routesWithAuthorityComponent;
  }

  routes(): Routes {
    return this._routes;
  }

  getLoginRoute(): Route {
    return this.getFirstRouteByComponent(LoginComponent);
  }

// TODO: Testme
  getFirstRouteByComponent(componentType: Type<AuthorityComponent>): Route {
    const routes = this._routes;
    const componentRoutes = Optional.of(
      _.where(routes, {component: componentType})
    ).getOrProvide(function () {
      return [routes[0]];
    });
    return componentRoutes[0];
  }

}
