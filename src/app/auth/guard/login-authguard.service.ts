import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/index';
import {Injectable} from '@angular/core';
import {TranslatedToastrFacade} from '../../common/toaster/translated-toaster.service';
import {AuthorityHomerouteMapping} from '../authority-homeroute.mapping';
import {AuthCookiesService} from '../cookies/authcookies.service';

@Injectable()
export class LoginAuthGuard implements CanActivate {

  constructor(private router: Router,
              private toaster: TranslatedToastrFacade,
              private cookies: AuthCookiesService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.cookies.containsSecurityToken()) {
      this.toaster.warning('notifications.loginForbidden');
      this.router.navigateByUrl(
        AuthorityHomerouteMapping
          .getFirstForAuthorities(this.cookies.authorities)
          .path
      );
      return false;
    }
    return true;
  }



}
