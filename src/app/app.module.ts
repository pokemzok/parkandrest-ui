import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {LoginComponent} from './authentication/login/login.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {FooterComponent} from './footer/footer.component';
import {CookieService} from 'ngx-cookie-service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AuthCookiesService} from './security/cookies/authcookies.service';
import {RouterModule} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {AccountMonitoringComponent} from './accountmonitoring/accountmonitoring.component';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslatedToastrFacade} from './common/toaster/translated-toaster.service';
import {HeaderComponent} from './header/header.component';
import {ModalModule} from 'ngx-modal';
import {DateAdapter, MatTabsModule} from '@angular/material';
import {MomentModule} from 'ngx-moment';
import {MockFinancialReportService} from './accountmonitoring/mockfinancialreport.service';
import {Provider} from '@angular/core/src/di/provider';
import {MockAuthService} from './security/mockauth.service';
import {ENVIRONMENT} from '../environments/environment';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {AuthenticationService} from './security/authentication.service';
import {FinancialReportService} from './accountmonitoring/financialreport.service';
import {MockParkingSpaceService} from './parkingmeter/mock.parkingspace.service';
import {ParkingSpaceService} from './parkingmeter/parkingspace.service';
import {TranslatedOptionFactory} from './form/select/options/translated-option.factory';
import {UsersManagementComponent} from './users/manage/users-management.component';
import {NewUserComponent} from './users/new/new-user.component';
import {MockUserManagementService} from './users/mock.user-management.service';
import {UserManagementService} from './users/user-management.service';
import {MockUsersService} from './users/manage/mock.users.service';
import {UsersService} from './users/manage/users.service';
import {LogoutComponent} from './authentication/logout/logout.component';
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
import {FormModule} from './form/form.module';

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
    LoginComponent,
    FooterComponent,
    UsersComponent,
    AccountMonitoringComponent,
    HeaderComponent,
    UsersManagementComponent,
    NewUserComponent,
    LogoutComponent,
    HasAuthDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
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
    MomentModule,
    MatTabsModule,
    StoreModule.forRoot({authorization: authorityReducer}),
    CommonsModule,
    FormModule,
    DrivermockModule,
    // ParkingMeterModule
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
    TranslatedOptionFactory,
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
