import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {TranslatedOptionFactory} from './form/select/options/translated-option.factory';
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
import {DrivermockModule} from './drivermock/drivermock.module';
import {CommonsModule} from './common/commons.module';
import {ParkingMeterModule} from './parkingmeter/parkingmeter.module';
import {AccountMonitoringModule} from './accountmonitoring/accountmonitoring.module';
import {UsersModule} from './users/users.module';
import {LoginComponent} from './authentication/login/login.component';
import {LogoutComponent} from './authentication/logout/logout.component';
import {AuthenticationService} from './security/authentication.service';
import {ENVIRONMENT} from '../environments/environment';
import {MockAuthService} from './security/mockauth.service';
import {Provider} from '@angular/core/src/di/provider';
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
  ]
}

function provideBackendServices(): Provider[] {
  return [
    {provide: 'AuthService', useClass: AuthenticationService},
  ]
}

@NgModule({
  declarations: [
    NavbarComponent,
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HasAuthDirective,
    LoginComponent,
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
    StoreModule.forRoot({authorization: authorityReducer}),
    ModalModule,
    CommonsModule,
    FormModule,
    DrivermockModule,
    ParkingMeterModule,
    AccountMonitoringModule,
    UsersModule
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
