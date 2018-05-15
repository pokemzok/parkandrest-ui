import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {LoginComponent} from './login/login.component';
import {FormInputComponent} from './form/form-input/form-input.component';
import {FormSubmitComponent} from './form/form-submit/form-submit.component';
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

const routes: Routes = [
  {path: '', component: LoginComponent}, // FIXME, should be main page after login
  {path: 'login', component: LoginComponent},
  {path: 'account/monitoring', canActivate: [AuthGuard], component: AccountMonitoringComponent},
  {path: 'parkingmeter', canActivate: [AuthGuard], component: ParkingMeterComponent} // TODO: protect routes with securities
];

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    LoginComponent,
    FormInputComponent,
    FormSubmitComponent,
    FooterComponent,
    ParkingMeterComponent,
    UsersComponent,
    AccountMonitoringComponent
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
    RouterModule.forRoot(routes)
  ],
  providers: [
    CookieService,
    AuthCookiesService,
    ProxyAuthService,
    HealthCheckService,
    AuthGuard,
    TranslatedToastrFacade
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
