import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {TranslatedToastrFacade} from '../../common/toaster/translated-toaster.service';
import {AuthCookiesService} from '../cookies/authcookies.service';
import {Authority} from '../authority';
import {SecureAuthGuard} from './secure-authguard.template';

@Injectable()
export class DriverAuthGuard extends SecureAuthGuard {

  constructor( cookies: AuthCookiesService,
               router: Router,
               toaster: TranslatedToastrFacade) {
    super(cookies, router, toaster);
  }

  isUserNotHaveAuthority(): boolean {
    return !this.cookies.containsAuthority(Authority.DRIVER);
  }

}
