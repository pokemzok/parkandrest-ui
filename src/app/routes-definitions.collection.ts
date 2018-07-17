import {LoginComponent} from './authentication/login/login.component';
import {Routes} from '@angular/router';
import {Route} from '@angular/router/src/config';
import {Type} from '@angular/core';
import {Optional} from './common/optional/optional';
import * as _ from 'underscore';
import {AuthorityComponent} from './security/auth/authority.component';
import {RoutesWithComponentCollection} from './security/routes/routes-with-component.collection.interface';
import {AccountMonitoringComponent} from './accountmonitoring/accountmonitoring.component';
import {DrivermockComponent} from './drivermock/drivermock.component';
import {LogoutComponent} from './authentication/logout/logout.component';
import {Authority} from './security/auth/authority';
import {ParkingMeterComponent} from './parkingmeter/parkingmeter.component';
import {UsersComponent} from './users/users.component';

class AuthComponentTypePair {

  private readonly _auth: Authority;
  private readonly _component: Type<AuthorityComponent>;

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

/**
 * Would behave correctly only for component driven routes where every component is of AuthorityComponent type
 */
// TODO: Testme
export class RoutesDefinitionsCollection implements RoutesWithComponentCollection {

  private readonly authComponentMapping = [
    new AuthComponentTypePair(Authority.NO_AUTHORITY, LogoutComponent),
    new AuthComponentTypePair(Authority.OWNER, AccountMonitoringComponent),
    new AuthComponentTypePair(Authority.ADMIN, UsersComponent),
    new AuthComponentTypePair(Authority.OPERATOR, ParkingMeterComponent),
    new AuthComponentTypePair(Authority.DRIVER, DrivermockComponent),
  ];

  private readonly _routes: Routes;

  // static declaration of Routes is impossible in this collection because of the limitations of angular compiler
  constructor(routesWithAuthorityComponent: Routes) {
    this._routes = routesWithAuthorityComponent;
  }

  routes(): Routes {
    return this._routes;
  }

  getLoginRoute(): Route {
    return this.getFirstRouteByComponent(LoginComponent);
  }

  getFirstRouteByComponent(componentType: Type<AuthorityComponent>): Route {
    const routes = this._routes;
    const componentRoutes = Optional.of(
      _.where(routes, {component: componentType})
    ).getOrProvide(function () {
      return [routes[0]];
    });
    return componentRoutes[0];
  }

  getFirstRouteByAuthorities(authorities: Authority[]): Route {
    const sortedAuthorities = _.sortBy(authorities, function (authority) {
      return authority.valueOf()
    });
    if (sortedAuthorities.length > 0) {
      return this.getFirstRouteByAuthority(sortedAuthorities[0]);
    } else {
      throw new Error('There was no authorities to select from');
    }
  }

  getFirstRouteByAuthority(authority: Authority): Route {
    const result = _.where(this.authComponentMapping, {auth: authority});
    if (result.length === 0) {
      console.log('Found no authority allowing to route to website content, returning logout route');
      return this.getFirstRouteByComponent(
        this.getNoAuthorityMapping().component
      );
    }
    return this.getFirstRouteByComponent(result[0].component);
  }

  private getNoAuthorityMapping(): AuthComponentTypePair {
    return _.first(this.authComponentMapping);
  }
}
