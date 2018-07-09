import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {LoginComponent} from './login/login.component';
import {FormInputComponent} from './form/input/form-input.component';
import {FormSubmitComponent} from './form/submit/form-submit.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {FooterComponent} from './footer/footer.component';
import {CookieService} from 'ngx-cookie-service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AuthCookiesService} from './auth/cookies/authcookies.service';
import {HealthCheckService} from './healthcheck/healthcheck.service';
import {RouterModule} from '@angular/router';
import {ParkingMeterComponent} from './parkingmeter/parkingmeter.component';
import {UsersComponent} from './users/users.component';
import {AccountMonitoringComponent} from './accountmonitoring/accountmonitoring.component';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslatedToastrFacade} from './common/toaster/translated-toaster.service';
import {DrivermockComponent} from './drivermock/drivermock.component';
import {HeaderComponent} from './header/header.component';
import {ModalModule} from 'ngx-modal';
import {DateAdapter, MatDatepickerModule, MatNativeDateModule, MatTabsModule} from '@angular/material';
import {DatepickerComponent} from './form/datepicker/datepicker.component';
import {MomentModule} from 'ngx-moment';
import {MockFinancialReportService} from './accountmonitoring/mockfinancialreport.service';
import {FormReadonlyComponent} from './form/readonly/form-readonly.component';
import {Provider} from '@angular/core/src/di/provider';
import {MockAuthService} from './auth/mockauth.service';
import {ENVIRONMENT} from '../environments/environment';
import {MatMomentDateModule, MomentDateAdapter} from '@angular/material-moment-adapter';
import {AuthenticationService} from './auth/authentication.service';
import {FinancialReportService} from './accountmonitoring/financialreport.service';
import {MockParkingSpaceService} from './parkingmeter/mock.parkingspace.service';
import {ParkingSpaceService} from './parkingmeter/parkingspace.service';
import {FormSelectComponent} from './form/select/select/form-select.component';
import {TranslatedOptionFactory} from './form/select/options/translated-option.factory';
import {UsersManagementComponent} from './users/manage/users-management.component';
import {NewUserComponent} from './users/new/new-user.component';
import {MockUserManagementService} from './users/mock.user-management.service';
import {UserManagementService} from './users/user-management.service';
import {MockUsersService} from './users/manage/mock.users.service';
import {UsersService} from './users/manage/users.service';
import {LogoutComponent} from './logout/logout.component';
import {LoginAuthGuard} from './auth/guard/login-authguard.service';
import {AuthGuard} from './auth/guard/authguard.service';
import {ROUTES_DEFINITIONS} from './routes-definitions';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideServices (): any[] {
  if (!(ENVIRONMENT.PRODUCTION) && ENVIRONMENT.SERVER_OFFLINE) {
    return provideMockServices();
  } else {
    return provideBackendServices()
  }
}

export function provideMockServices(): Provider[] {
  return [
    {provide: 'AuthService', useClass: MockAuthService},
    {provide: 'FinancialReportService', useClass: MockFinancialReportService},
    {provide: 'ParkingSpaceService', useClass: MockParkingSpaceService},
    {provide: 'UserManagementService', useClass: MockUserManagementService},
    {provide: 'UsersService', useClass: MockUsersService}
  ]
}

export function provideBackendServices(): Provider[] {
  return [
    {provide: 'AuthService', useClass: AuthenticationService},
    {provide: 'FinancialReportService', useClass: FinancialReportService},
    {provide: 'ParkingSpaceService', useClass: ParkingSpaceService},
    {provide: 'UserManagementService', useClass: UserManagementService},
    {provide: 'UsersService', useClass: UsersService}
  ]
}

@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    LoginComponent,
    FormInputComponent,
    FormSubmitComponent,
    FooterComponent,
    ParkingMeterComponent,
    UsersComponent,
    AccountMonitoringComponent,
    DrivermockComponent,
    HeaderComponent,
    DatepickerComponent,
    FormReadonlyComponent,
    FormSelectComponent,
    UsersManagementComponent,
    NewUserComponent,
    LogoutComponent
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
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MatTabsModule
  ],
  providers: [
    CookieService,
    AuthCookiesService,
    HealthCheckService,
    AuthGuard,
    LoginAuthGuard,
    TranslatedToastrFacade,
    TranslatedOptionFactory,
    {provide: DateAdapter, useClass: MomentDateAdapter}
  ].concat(provideServices()),
  bootstrap: [AppComponent]
})
export class AppModule {
}
