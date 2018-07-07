import {LoginComponent} from './login/login.component';
import {Routes} from '@angular/router';
import {Route} from '@angular/router/src/config';
import {Type} from '@angular/core';
import {Optional} from './common/optional/optional';
import * as _ from 'underscore';
import {ROUTES_DEFINITIONS} from './routes-definitions';

export class RoutesDefinitionsWrapper {
  // workaround, angular compiler does not allow to declare routes in class (https://github.com/angular/angular-cli/issues/3841).
  private static readonly _routes: Routes = ROUTES_DEFINITIONS;

  static get routes(): Routes {
    return this._routes;
  }

  static getLoginRoute(): Route {
    return RoutesDefinitionsWrapper.getFirstRouteByComponent(LoginComponent);
  }

// TODO: Testme
  static getFirstRouteByComponent(componentType: Type<any>): Route {
    const componentRoutes = Optional.of(
      _.where(this._routes, {component: componentType})
    ).getOrProvide(function () {
      return [this.routes[0]];
    });
    return componentRoutes[0];
  }

}
