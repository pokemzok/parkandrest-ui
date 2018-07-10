import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {TranslatedToastrFacade} from '../../common/toaster/translated-toaster.service';
import {AuthCookiesService} from '../cookies/authcookies.service';
import {SecureAuthGuard} from './secure-authguard.template';

@Injectable()
export class LogoutAuthGuard extends SecureAuthGuard {

  constructor( cookies: AuthCookiesService,
               router: Router,
               toaster: TranslatedToastrFacade) {
    super(cookies, router, toaster);
  }

  isUserNotHaveAuthority(): boolean {
    return false;
  }

}
