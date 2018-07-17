import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {FooterComponent} from './footer/footer.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {ToastrModule} from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HeaderComponent} from './header/header.component';
import {ModalModule} from 'ngx-modal';
import {DateAdapter} from '@angular/material';
import {Provider} from '@angular/core/src/di/provider';
import {MockAuthService} from './security/mockauth.service';
import {ENVIRONMENT} from '../environments/environment';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {AuthenticationService} from './security/authentication.service';
import {LoginAuthGuard} from './security/guard/login-authguard.service';
import {ROUTES_DEFINITIONS} from './routes-definitions';
import {OwnerAuthGuard} from './security/guard/owner-authguard.service';
import {OperatorAuthGuard} from './security/guard/operator-authguard.service';
import {AdminAuthGuard} from './security/guard/admin-authguard.service';
import {LogoutAuthGuard} from './security/guard/logout-authguard.service';
import {DriverAuthGuard} from './security/guard/driver-authguard.service';
import {StoreModule} from '@ngrx/store';
import {authorityReducer} from './security/store/authority-reducer';
import {StoreInitializer} from './security/store/store-initializer';
import {DrivermockModule} from './drivermock/drivermock.module';
import {CommonsModule} from './common/commons.module';
import {ParkingMeterModule} from './parkingmeter/parkingmeter.module';
import {AccountMonitoringModule} from './accountmonitoring/accountmonitoring.module';
import {UsersModule} from './users/users.module';
import {AuthenticationModule} from './authentication/authentication.module';
import {SecurityModule} from './security/security.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// TODO: remove when extract security as another module
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
    HeaderComponent
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
    SecurityModule,
    CommonsModule,
    AccountMonitoringModule,
    DrivermockModule,
    ParkingMeterModule,
    UsersModule,
    AuthenticationModule
  ],
  providers: [
    OwnerAuthGuard,
    LoginAuthGuard,
    OperatorAuthGuard,
    AdminAuthGuard,
    LogoutAuthGuard,
    DriverAuthGuard,
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
