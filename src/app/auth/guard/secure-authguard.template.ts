import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/index';
import {TranslatedToastrFacade} from '../../common/toaster/translated-toaster.service';
import {ENVIRONMENT} from '../../../environments/environment';
import {AuthCookiesService} from '../cookies/authcookies.service';
import {RoutesDefinitionsCollection} from '../../routes-definitions.collection';
import {AuthorityToComponentMapping} from '../authority-component.mapping';

export abstract class SecureAuthGuard implements CanActivate {

  private static noAuthModeAvailable(): boolean {
    return ENVIRONMENT.PRODUCTION !== true && ENVIRONMENT.NO_AUTH_MODE
  }

  constructor(protected cookies: AuthCookiesService,
              protected router: Router,
              protected toaster: TranslatedToastrFacade) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.cookies.containsSecurityToken() && !SecureAuthGuard.noAuthModeAvailable()) { // FIXME change to ngrx store
      this.toaster.warning('notifications.forbidden');
      this.router.navigateByUrl(
        RoutesDefinitionsCollection.getInstance().getLoginRoute().path
      );
      return false;
    } else if (this.isUserNotHaveAuthority()) {
      this.toaster.warning('notifications.unauthorized');
      const selectedRoute = RoutesDefinitionsCollection
        .getInstance()
        .getFirstRouteByComponent(AuthorityToComponentMapping.getFirstForAuthorities(this.cookies.authorities));
      this.router.navigateByUrl(selectedRoute.path);
    }
    return true;
  }

  abstract isUserNotHaveAuthority(): boolean;

}
