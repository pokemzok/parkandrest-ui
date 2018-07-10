import {UsersComponent} from './users/users.component';
import {ParkingMeterComponent} from './parkingmeter/parkingmeter.component';
import {LogoutComponent} from './logout/logout.component';
import {LoginComponent} from './login/login.component';
import {AccountMonitoringComponent} from './accountmonitoring/accountmonitoring.component';
import {DrivermockComponent} from './drivermock/drivermock.component';
import {LoginAuthGuard} from './auth/guard/login-authguard.service';
import {Routes} from '@angular/router';
import {OwnerAuthGuard} from './auth/guard/owner-authguard.service';
import {OperatorAuthGuard} from './auth/guard/operator-authguard.service';
import {LogoutAuthGuard} from './auth/guard/logout-authguard.service';
import {AdminAuthGuard} from './auth/guard/admin-authguard.service';
import {DriverAuthGuard} from './auth/guard/driver-authguard.service';

export const ROUTES_DEFINITIONS: Routes = [
  {path: '', canActivate: [LoginAuthGuard], component: LoginComponent},
  {path: 'login', canActivate: [LoginAuthGuard], component: LoginComponent},
  {path: 'account/monitoring', canActivate: [OwnerAuthGuard], component: AccountMonitoringComponent},
  {path: 'parkingmeter', canActivate: [OperatorAuthGuard], component: ParkingMeterComponent},
  {path: 'users', canActivate: [AdminAuthGuard], component: UsersComponent},
  {path: 'drivermock', canActivate: [DriverAuthGuard], component: DrivermockComponent},
  {path: 'logout', canActivate: [LogoutAuthGuard], component: LogoutComponent},
];
