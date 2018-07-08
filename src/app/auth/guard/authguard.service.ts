import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/index';
import {Injectable} from '@angular/core';
import {TranslatedToastrFacade} from '../../common/toaster/translated-toaster.service';
import {ENVIRONMENT} from '../../../environments/environment';
import {AuthCookiesService} from '../cookies/authcookies.service';
import {RoutesDefinitionsCollection} from '../../routes-definitions.collection';

@Injectable()
export class AuthGuard implements CanActivate {

  private static noAuthModeAvailable(): boolean {
    return ENVIRONMENT.PRODUCTION !== true && ENVIRONMENT.NO_AUTH_MODE
  }

  constructor(private cookies: AuthCookiesService,
              private router: Router,
              private toaster: TranslatedToastrFacade) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.cookies.containsSecurityToken() && !AuthGuard.noAuthModeAvailable()) {
      this.toaster.warning('notifications.forbidden');
      this.router.navigateByUrl(
         RoutesDefinitionsCollection.getInstance().getLoginRoute().path
      );
      return false;
    }
    return true;
  }



}
