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

// TODO: Testme
export class AuthorityHomerouteMapping {

  private static mapping = [
    new AuthRoutePair(Authority.OWNER, RouteDefinitions.getFirstRouteByComponent(AccountMonitoringComponent)),
    new AuthRoutePair(Authority.ADMIN, RouteDefinitions.getFirstRouteByComponent(UsersComponent)),
    new AuthRoutePair(Authority.OPERATOR, RouteDefinitions.getFirstRouteByComponent(ParkingMeterComponent)),
    new AuthRoutePair(Authority.DRIVER, RouteDefinitions.getFirstRouteByComponent(DrivermockComponent)),
  ];

  static getFirstForAuthority(authority: Authority): Route {
    const result = Optional.of(
      _.where(this.mapping, {authority: authority})
    ).getOrProvide(function () {
      throw new Error('Default home route is missing for authority: ' + authority);
    });
    return result[0].route;
  }

}
