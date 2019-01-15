import {ModuleWithProviders, NgModule} from '@angular/core';
import {HasAuthDirective} from './directive/has-auth.directive';
import {ToastrModule} from 'ngx-toastr';
import {CookieService} from 'ngx-cookie-service';
import {AuthCookiesService} from './cookies/authcookies.service';
import {TranslatedToastrFacade} from '../common/toaster/translated-toaster.service';
import {Provider} from '@angular/core/src/di/provider';
import {AuthenticationService} from './auth/authentication.service';
import {MockAuthService} from './auth/mockauth.service';
import {ENVIRONMENT} from '../../environments/environment';
import {RoutesWithComponentCollection} from './routes/routes-with-component.collection.interface';
import {SecureHttpService} from './http/secure-http.service';
import {DefaultErrorHandler} from '../common/http/default-error.handler';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {UnauthrorizedInterceptor} from './auth/unauthrorized.interceptor';

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
    HasAuthDirective
  ],
  imports: [
    ToastrModule,
  ],
  providers: [
    CookieService,
    AuthCookiesService,
    TranslatedToastrFacade,
    SecureHttpService,
    {provide: 'ErrorHandler', useClass: DefaultErrorHandler},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthrorizedInterceptor,
      multi: true
    }
  ].concat(provideServices()),
  exports: [
    HasAuthDirective
  ]
})
export class SecurityModule {

  static forRoot(routesCollection: RoutesWithComponentCollection): ModuleWithProviders {
    return {
      ngModule: SecurityModule,

      providers: [

        CookieService,
        AuthCookiesService,
        TranslatedToastrFacade,
        {provide: 'RoutesWithComponentCollection', useValue: routesCollection}
      ].concat(provideServices())
    }
  }

}
