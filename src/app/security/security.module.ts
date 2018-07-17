import {NgModule} from '@angular/core';
import {HasAuthDirective} from './directive/has-auth.directive';
import {ToastrModule} from 'ngx-toastr';
import {CookieService} from 'ngx-cookie-service';
import {AuthCookiesService} from './cookies/authcookies.service';
import {TranslatedToastrFacade} from '../common/toaster/translated-toaster.service';

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
  ],
  exports: [
    HasAuthDirective
  ]
})
export class SecurityModule {

}
