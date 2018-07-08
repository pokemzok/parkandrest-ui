import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/index';
import {Injectable} from '@angular/core';
import {TranslatedToastrFacade} from '../../common/toaster/translated-toaster.service';
import {AuthorityToComponentMapping} from '../authority-component.mapping';
import {AuthCookiesService} from '../cookies/authcookies.service';
import {RoutesDefinitionsCollection} from '../../routes-definitions.collection';

@Injectable()
export class LoginAuthGuard implements CanActivate {

  constructor(private router: Router,
              private toaster: TranslatedToastrFacade,
              private cookies: AuthCookiesService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.cookies.containsSecurityToken()) {
      this.toaster.warning('notifications.loginForbidden');
      this.router.navigateByUrl(
        RoutesDefinitionsCollection
          .getInstance()
          .getFirstRouteByComponent(
            AuthorityToComponentMapping.getFirstForAuthorities(this.cookies.authorities))
          .path
      );
      return false;
    }
    return true;
  }


}
