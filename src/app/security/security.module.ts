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
import {RoutesWithComponentCollection} from './routing/routes-with-component.collection.interface';

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
    TranslatedToastrFacade
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
