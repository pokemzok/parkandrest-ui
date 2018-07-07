import {AuthGuard} from './auth/guard/authguard.service';
import {UsersComponent} from './users/users.component';
import {ParkingMeterComponent} from './parkingmeter/parkingmeter.component';
import {LogoutComponent} from './logout/logout.component';
import {LoginComponent} from './login/login.component';
import {AccountMonitoringComponent} from './accountmonitoring/accountmonitoring.component';
import {DrivermockComponent} from './drivermock/drivermock.component';
import {LoginAuthGuard} from './auth/guard/login-authguard.service';
import {Routes} from '@angular/router';

export const ROUTES_DEFINITIONS: Routes = [
  {path: '', canActivate: [LoginAuthGuard], component: LoginComponent},
  {path: 'login', canActivate: [LoginAuthGuard], component: LoginComponent},
  {path: 'account/monitoring', canActivate: [AuthGuard], component: AccountMonitoringComponent},
  {path: 'parkingmeter', canActivate: [AuthGuard], component: ParkingMeterComponent},
  {path: 'users', canActivate: [AuthGuard], component: UsersComponent},
  {path: 'drivermock', canActivate: [AuthGuard], component: DrivermockComponent},
  {path: 'logout', canActivate: [AuthGuard], component: LogoutComponent},
];
