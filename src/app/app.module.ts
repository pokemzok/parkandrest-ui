import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {FooterComponent} from './footer/footer.component';
import {CookieService} from 'ngx-cookie-service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AuthCookiesService} from './security/cookies/authcookies.service';
import {RouterModule} from '@angular/router';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslatedToastrFacade} from './common/toaster/translated-toaster.service';
import {HeaderComponent} from './header/header.component';
import {ModalModule} from 'ngx-modal';
import {DateAdapter} from '@angular/material';
import {MockFinancialReportService} from './accountmonitoring/report/mockfinancialreport.service';
import {Provider} from '@angular/core/src/di/provider';
import {MockAuthService} from './security/mockauth.service';
import {ENVIRONMENT} from '../environments/environment';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {AuthenticationService} from './security/authentication.service';
import {FinancialReportService} from './accountmonitoring/report/financialreport.service';
import {MockParkingSpaceService} from './parkingmeter/mock.parkingspace.service';
import {ParkingSpaceService} from './parkingmeter/parkingspace.service';
import {MockUserManagementService} from './users/mock.user-management.service';
import {UserManagementService} from './users/user-management.service';
import {MockUsersService} from './users/manage/mock.users.service';
import {UsersService} from './users/manage/users.service';
import {LoginAuthGuard} from './security/guard/login-authguard.service';
import {ROUTES_DEFINITIONS} from './routes-definitions';
import {OwnerAuthGuard} from './security/guard/owner-authguard.service';
import {OperatorAuthGuard} from './security/guard/operator-authguard.service';
import {AdminAuthGuard} from './security/guard/admin-authguard.service';
import {LogoutAuthGuard} from './security/guard/logout-authguard.service';
import {DriverAuthGuard} from './security/guard/driver-authguard.service';
import {HasAuthDirective} from './security/directive/has-auth.directive';
import {StoreModule} from '@ngrx/store';
import {authorityReducer} from './security/store/authority-reducer';
import {StoreInitializer} from './security/store/store-initializer';
import {UsernameValidator} from './users/new/validator/username.validator.interface';
import {MockUsernameValidator} from './users/new/validator/mock.username.validator';
import {AsyncUsernameValidator} from './users/new/validator/async.username.validator';
import {DrivermockModule} from './drivermock/drivermock.module';
import {CommonsModule} from './common/commons.module';
import {ParkingMeterModule} from './parkingmeter/parkingmeter.module';
import {AccountMonitoringModule} from './accountmonitoring/accountmonitoring.module';
import {UsersModule} from './users/users.module';
import {AuthenticationModule} from './authentication/authentication.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

function provideServices(): any[] {
  if (!(ENVIRONMENT.PRODUCTION) && ENVIRONMENT.SERVER_OFFLINE) {
    return provideMockServices();
  } else {
    return provideBackendServices()
  }
}

function provideMockServices(): Provider[] {
  return [
    {provide: 'AuthService', useClass: MockAuthService},
    {provide: 'FinancialReportService', useClass: MockFinancialReportService},
    {provide: 'ParkingSpaceService', useClass: MockParkingSpaceService},
    {provide: 'UserManagementService', useClass: MockUserManagementService},
    {provide: 'UsersService', useClass: MockUsersService},
    {provide: 'UsernameValidator', useClass: MockUsernameValidator},
  ]
}

function provideBackendServices(): Provider[] {
  return [
    {provide: 'AuthService', useClass: AuthenticationService},
    {provide: 'FinancialReportService', useClass: FinancialReportService},
    {provide: 'ParkingSpaceService', useClass: ParkingSpaceService},
    {provide: 'UserManagementService', useClass: UserManagementService},
    {provide: 'UsersService', useClass: UsersService},
    {provide: 'UsernameValidator', useClass: AsyncUsernameValidator},
  ]
}

@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HasAuthDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(ROUTES_DEFINITIONS),
    ModalModule,
    StoreModule.forRoot({authorization: authorityReducer}),
    CommonsModule,
    AccountMonitoringModule,
    DrivermockModule,
    ParkingMeterModule,
    UsersModule,
    AuthenticationModule
  ],
  providers: [
    CookieService,
    AuthCookiesService,
    OwnerAuthGuard,
    LoginAuthGuard,
    OperatorAuthGuard,
    AdminAuthGuard,
    LogoutAuthGuard,
    DriverAuthGuard,
    TranslatedToastrFacade,
    StoreInitializer,
    {provide: DateAdapter, useClass: MomentDateAdapter}
  ].concat(provideServices()),
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(storeInitializer: StoreInitializer) {
    storeInitializer.initialize();
  }
}
