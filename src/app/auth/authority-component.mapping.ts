import {Authority} from './authority';
import {AuthRoutePair} from './auth-route.pair';
import {AccountMonitoringComponent} from '../accountmonitoring/accountmonitoring.component';
import {UsersComponent} from '../users/users.component';
import {ParkingMeterComponent} from '../parkingmeter/parkingmeter.component';
import {DrivermockComponent} from '../drivermock/drivermock.component';
import * as _ from 'underscore';
import {LogoutComponent} from '../logout/logout.component';
import {Type} from '@angular/core';

export class AuthorityToComponentMapping {

  private static readonly mapping = [
    new AuthRoutePair(Authority.NO_AUTHORITY, LogoutComponent),
    new AuthRoutePair(Authority.OWNER, AccountMonitoringComponent),
    new AuthRoutePair(Authority.ADMIN, UsersComponent),
    new AuthRoutePair(Authority.OPERATOR, ParkingMeterComponent),
    new AuthRoutePair(Authority.DRIVER, DrivermockComponent),
  ];

  static getFirstForAuthorities(authorities: Authority[]): Type<any> {
    const sortedAuthorities = _.sortBy(authorities, function (authority) {
      return authority.valueOf()
    });
    if (sortedAuthorities.length > 0) {
      return AuthorityToComponentMapping.getFirstForAuthority(sortedAuthorities[0]);
    } else {
      throw new Error('There was no authorities to select from');
    }
  }

  static getFirstForAuthority(authority: Authority): Type<any> {
    const result = _.where(this.mapping, {auth: authority});
    if (result.length === 0) {
      console.log('Found no authority allowing to route to website content, returning logout route');
      return AuthorityToComponentMapping.getNoAuthorityMapping().component;
    }
    return result[0].component;
  }

  private static getNoAuthorityMapping(): AuthRoutePair<Type<any>> {
    return _.first(this.mapping);
  }
}
