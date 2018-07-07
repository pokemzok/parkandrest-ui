import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/index';
import {Inject, Injectable} from '@angular/core';
import {TranslatedToastrFacade} from '../../common/toaster/translated-toaster.service';
import {Auth} from '../auth.interface';
import {AuthorityHomerouteMapping} from '../authority-homeroute.mapping';
import {AuthCookiesService} from '../authcookies.service';
import {Authority} from '../authority';

@Injectable()
export class LoginAuthGuard implements CanActivate {

  constructor(@Inject('AuthService')private authService: Auth,
              private router: Router,
              private toaster: TranslatedToastrFacade,
              private cookies: AuthCookiesService) { // FIXME: cookies works like shit, they incorrectly store authorities
                                                    // (should return array instead of one borring string)
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isAuthenticated()) {
      this.toaster.warning('notifications.loginForbidden');
      this.router.navigateByUrl(
        AuthorityHomerouteMapping
          .getFirstForAuthorities([Authority.OPERATOR])
          .path
      );
      return false;
    }
    return true;
  }



}
