import {DrivermockComponent} from './drivermock/drivermock.component';
import {ParkingMeterComponent} from './parkingmeter/parkingmeter.component';
import {LoginComponent} from './login/login.component';
import {AccountMonitoringComponent} from './accountmonitoring/accountmonitoring.component';
import {AuthGuard} from './auth/authguard.service';
import {UsersComponent} from './users/users.component';
import {Routes} from '@angular/router';
import {Route} from '@angular/router/src/config';
import {Type} from '@angular/core';
import {Optional} from './common/optional/optional';
import * as _ from 'underscore';
import {LogoutComponent} from './logout/logout.component';

export class RouteDefinitions {

  private static _routes: Routes = [
    {path: '', component: LoginComponent},
    {path: 'login', component: LoginComponent},
    {path: 'account/monitoring', canActivate: [AuthGuard], component: AccountMonitoringComponent},
    {path: 'parkingmeter', canActivate: [AuthGuard], component: ParkingMeterComponent},
    {path: 'users', canActivate: [AuthGuard], component: UsersComponent},
    {path: 'drivermock', canActivate: [AuthGuard], component: DrivermockComponent},
    {path: 'logout', canActivate: [AuthGuard], component: LogoutComponent},
  ];

  static get routes(): Routes {
    return this._routes;
  }

  static getLoginRoute(): Route {
    return RouteDefinitions.getFirstRouteByComponent(LoginComponent);
  }

// TODO: Testme
  static getFirstRouteByComponent(componentType: Type<any>): Route {
    const routes = Optional.of(
      _.where(this._routes, {component: componentType})
    ).getOrProvide(function () {
      return [this.routes[0]];
    });
    return routes[0];
  }

}
