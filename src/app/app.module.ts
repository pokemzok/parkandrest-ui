import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
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
import {AuthenticationModule} from './authentication/authentication.module';
import {UsersModule} from './users/users.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
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
    DrivermockModule,
    ParkingMeterModule,
    AccountMonitoringModule,
    AuthenticationModule,
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(storeInitializer: StoreInitializer) {
    storeInitializer.initialize();
  }
}
