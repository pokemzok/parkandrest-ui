import {Authority} from './authority';
import {AuthRoutePair} from './auth-route.pair';
import {RoutesDefinitionsWrapper} from '../routes-definitions.wrapper';
import {AccountMonitoringComponent} from '../accountmonitoring/accountmonitoring.component';
import {Route} from '@angular/router';
import {UsersComponent} from '../users/users.component';
import {ParkingMeterComponent} from '../parkingmeter/parkingmeter.component';
import {DrivermockComponent} from '../drivermock/drivermock.component';
import * as _ from 'underscore';
import {Optional} from '../common/optional/optional';
import {LogoutComponent} from '../logout/logout.component';

// TODO: Testme
export class AuthorityHomerouteMapping {

  private static readonly mapping = [
    new AuthRoutePair(Authority.NO_AUTHORITY, RoutesDefinitionsWrapper.getFirstRouteByComponent(LogoutComponent)),
    new AuthRoutePair(Authority.OWNER, RoutesDefinitionsWrapper.getFirstRouteByComponent(AccountMonitoringComponent)),
    new AuthRoutePair(Authority.ADMIN, RoutesDefinitionsWrapper.getFirstRouteByComponent(UsersComponent)),
    new AuthRoutePair(Authority.OPERATOR, RoutesDefinitionsWrapper.getFirstRouteByComponent(ParkingMeterComponent)),
    new AuthRoutePair(Authority.DRIVER, RoutesDefinitionsWrapper.getFirstRouteByComponent(DrivermockComponent)),
  ];

  static getFirstForAuthorities(authorities: Authority[]): Route {
    const sortedAuthorities = _.sortBy(authorities, function (authority) {
      return authority.valueOf()
    });
    if (sortedAuthorities.length > 0) {
      return AuthorityHomerouteMapping.getFirstForAuthority(sortedAuthorities[0]);
    } else {
      throw new Error('There was no authorities to select from');
    }
  }

  static getFirstForAuthority(authority: Authority): Route {
    const result = Optional.of(
      _.where(this.mapping, {auth: authority})
    ).getOrProvide(function () {
      console.log('Found no authority allowing to route to website content, returning logout route');
      return [AuthorityHomerouteMapping.getNoAuthorityMapping()];
    });
    return result[0].route;
  }

  private static getNoAuthorityMapping(): AuthRoutePair {
    return _.first(this.mapping);
  }
}
