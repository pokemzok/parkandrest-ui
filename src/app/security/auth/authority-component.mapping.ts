import {Authority} from './authority';
import {AuthComponentTypePair} from './auth-component-type.pair';
import {AccountMonitoringComponent} from '../../accountmonitoring/accountmonitoring.component';
import {UsersComponent} from '../../users/users.component';
import {ParkingMeterComponent} from '../../parkingmeter/parkingmeter.component';
import {DrivermockComponent} from '../../drivermock/drivermock.component';
import * as _ from 'underscore';
import {LogoutComponent} from '../../authentication/logout/logout.component';
import {Type} from '@angular/core';
import {AuthorityComponent} from './authority.component';

export class AuthorityToComponentMapping {

  private static readonly mapping = [
    new AuthComponentTypePair(Authority.NO_AUTHORITY, LogoutComponent),
    new AuthComponentTypePair(Authority.OWNER, AccountMonitoringComponent),
    new AuthComponentTypePair(Authority.ADMIN, UsersComponent),
    new AuthComponentTypePair(Authority.OPERATOR, ParkingMeterComponent),
    new AuthComponentTypePair(Authority.DRIVER, DrivermockComponent),
  ];

  static getFirstForAuthorities(authorities: Authority[]): Type<AuthorityComponent> {
    const sortedAuthorities = _.sortBy(authorities, function (authority) {
      return authority.valueOf()
    });
    if (sortedAuthorities.length > 0) {
      return AuthorityToComponentMapping.getFirstForAuthority(sortedAuthorities[0]);
    } else {
      throw new Error('There was no authorities to select from');
    }
  }

  static getFirstForAuthority(authority: Authority): Type<AuthorityComponent> {
    const result = _.where(this.mapping, {auth: authority});
    if (result.length === 0) {
      console.log('Found no authority allowing to route to website content, returning logout route');
      return AuthorityToComponentMapping.getNoAuthorityMapping().component;
    }
    return result[0].component;
  }

  private static getNoAuthorityMapping(): AuthComponentTypePair {
    return _.first(this.mapping);
  }
}
