import {UsersComponent} from './users/users.component';
import {LogoutComponent} from './authentication/logout/logout.component';
import {LoginComponent} from './authentication/login/login.component';
import {AccountMonitoringComponent} from './accountmonitoring/accountmonitoring.component';
import {DrivermockComponent} from './drivermock/drivermock.component';
import {LoginAuthGuard} from './security/routes/guard/login-authguard.service';
import {Routes} from '@angular/router';
import {OwnerAuthGuard} from './security/routes/guard/owner-authguard.service';
import {LogoutAuthGuard} from './security/routes/guard/logout-authguard.service';
import {AdminAuthGuard} from './security/routes/guard/admin-authguard.service';
import {DriverAuthGuard} from './security/routes/guard/driver-authguard.service';
import {OperatorAuthGuard} from './security/routes/guard/operator-authguard.service';
import {ParkingMeterComponent} from './parkingmeter/parkingmeter.component';

export const ROUTES_DEFINITIONS: Routes = [
  {path: '', canActivate: [LoginAuthGuard], component: LoginComponent},
  {path: 'login', canActivate: [LoginAuthGuard], component: LoginComponent},
  {path: 'accountmonitoring', canActivate: [OwnerAuthGuard], component: AccountMonitoringComponent},
  {path: 'parkingmeter', canActivate: [OperatorAuthGuard], component: ParkingMeterComponent},
  {path: 'users', canActivate: [AdminAuthGuard], component: UsersComponent},
  {path: 'drivermock', canActivate: [DriverAuthGuard], component: DrivermockComponent},
  {path: 'logout', canActivate: [LogoutAuthGuard], component: LogoutComponent},
];
