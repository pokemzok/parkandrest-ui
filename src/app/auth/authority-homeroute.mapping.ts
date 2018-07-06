import {Authority} from './authority';
import {AuthRoutePair} from './auth-route.pair';
import {RouteDefinitions} from '../route-definitions';
import {AccountMonitoringComponent} from '../accountmonitoring/accountmonitoring.component';
import {Route} from '@angular/router';
import {UsersComponent} from '../users/users.component';
import {ParkingMeterComponent} from '../parkingmeter/parkingmeter.component';
import {DrivermockComponent} from '../drivermock/drivermock.component';
import * as _ from 'underscore';
import {Optional} from '../common/optional/optional';
import {LoginComponent} from '../login/login.component';

// TODO: Testme
export class AuthorityHomerouteMapping {

  private static mapping = [
    new AuthRoutePair(Authority.OWNER, RouteDefinitions.getFirstRouteByComponent(AccountMonitoringComponent)),
    new AuthRoutePair(Authority.ADMIN, RouteDefinitions.getFirstRouteByComponent(UsersComponent)),
    new AuthRoutePair(Authority.OPERATOR, RouteDefinitions.getFirstRouteByComponent(ParkingMeterComponent)),
    new AuthRoutePair(Authority.DRIVER, RouteDefinitions.getFirstRouteByComponent(DrivermockComponent)),
  ];

  static getFirstForAuthorities(authorities: Authority[]): Route {
   const sortedAuthorities = _.sortBy(authorities, function (authority) {
     return authority.valueOf()
   });
   if (sortedAuthorities.length > 0) {
     return AuthorityHomerouteMapping.getFirstForAuthority(sortedAuthorities[0]);
   }
   return RouteDefinitions.getFirstRouteByComponent(LoginComponent);
  }

  static getFirstForAuthority(authority: Authority): Route {
    const result = Optional.of(
      _.where(this.mapping, {auth: authority})
    ).getOrProvide(function () {
      throw new Error('Default home route is missing for authority: ' + authority);
    });
    return result[0].route;
  }

}
