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
import {AuthCookiesService} from './auth/authcookies.service';
import {ProxyAuthService} from './auth/proxyauth.service';
import {HealthCheckService} from './healthcheck/healthcheck.service';
import {RouterModule, Routes} from '@angular/router';
import {ParkingMeterComponent} from './parkingmeter/parkingmeter.component';
import {UsersComponent} from './users/users.component';
import {AccountMonitoringComponent} from './accountmonitoring/accountmonitoring.component';
import {AuthGuard} from './auth/authguard.service';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TranslatedToastrFacade} from './toaster/translated-toaster.service';
import {DrivermockComponent} from './drivermock/drivermock.component';
import {HeaderComponent} from './header/header.component';
import {ModalModule} from 'ngx-modal';
import {DateAdapter, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import {DatepickerComponent} from './form/datepicker/datepicker.component';
import {MAT_MOMENT_DATE_FORMATS, MatMomentDateModule, MomentDateAdapter} from '@angular/material-moment-adapter';
import {MomentModule} from 'ngx-moment';
import {MockFinancialReportService} from './accountmonitoring/financialreport.service';

const routes: Routes = [
  {path: '', component: LoginComponent}, // FIXME, should be main page after login
  {path: 'login', component: LoginComponent},
  {path: 'account/monitoring', canActivate: [AuthGuard], component: AccountMonitoringComponent},
  {path: 'parkingmeter', canActivate: [AuthGuard], component: ParkingMeterComponent},
  {path: 'users', canActivate: [AuthGuard], component: UsersComponent},
  {path: 'drivermock', canActivate: [AuthGuard], component: DrivermockComponent},
];

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD'
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  }
};

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
    DatepickerComponent
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
    RouterModule.forRoot(routes),
    ModalModule,
    MomentModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule
  ],
  providers: [
    CookieService,
    AuthCookiesService,
    ProxyAuthService,
    HealthCheckService,
    AuthGuard,
    TranslatedToastrFacade,
    {provide: DateAdapter, useClass: MomentDateAdapter},
    {provide: MAT_MOMENT_DATE_FORMATS, useValue: MY_FORMATS},
    MockFinancialReportService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
