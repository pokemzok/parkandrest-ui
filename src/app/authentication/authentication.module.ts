import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormModule} from '../form/form.module';
import {ReactiveFormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';
import {LoginComponent} from './login/login.component';
import {ENVIRONMENT} from '../../environments/environment';
import {MockAuthService} from '../security/auth/mockauth.service';
import {AuthenticationService} from '../security/auth/authentication.service';
import {Provider} from '@angular/core/src/di/provider';
import {LogoutComponent} from './logout/logout.component';
import {ModalModule} from 'ngx-modal';
import {LoginAuthGuard} from '../security/guard/login-authguard.service';
import {LogoutAuthGuard} from '../security/guard/logout-authguard.service';
import {AuthCookiesService} from '../security/cookies/authcookies.service';
import {TranslatedToastrFacade} from '../common/toaster/translated-toaster.service';
import {SecurityModule} from '../security/security.module';

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
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    ModalModule,
    ReactiveFormsModule,
    SecurityModule,
    TranslateModule.forChild(),
    FormModule,
  ],
  providers: [
    LoginAuthGuard,
    LogoutAuthGuard,
    AuthCookiesService,
    TranslatedToastrFacade
  ].concat(provideServices()),
})
export class AuthenticationModule {

}
