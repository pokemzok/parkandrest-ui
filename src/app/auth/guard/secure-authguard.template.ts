import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {TranslatedToastrFacade} from '../../common/toaster/translated-toaster.service';
import {RoutesDefinitionsCollection} from '../../routes-definitions.collection';
import {AuthorityToComponentMapping} from '../authority-component.mapping';
import {AuthorizationModel} from '../authorization.model';
import {Store} from '@ngrx/store';
import {map, take} from 'rxjs/internal/operators';
import {Observable} from 'rxjs/index';

export abstract class SecureAuthGuard implements CanActivate {

  constructor(protected authStore: Store<AuthorizationModel>,
              protected router: Router,
              protected toaster: TranslatedToastrFacade) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authStore.select('authorization').pipe(take(1)).pipe(map(
      authModel => {
        if (!authModel.containsSecurityToken()) {
          this.toaster.warning('notifications.forbidden');
          this.router.navigateByUrl(
            RoutesDefinitionsCollection.getInstance().getLoginRoute().path
          );
          return false;
        } else if (this.isUserNotHaveAuthority(authModel)) {
          this.toaster.warning('notifications.unauthorized');
          const selectedRoute = RoutesDefinitionsCollection
            .getInstance()
            .getFirstRouteByComponent(AuthorityToComponentMapping.getFirstForAuthorities(authModel.authorities));
          this.router.navigateByUrl(selectedRoute.path);
          return false;
        }
        return true;
      }));
  }

  abstract isUserNotHaveAuthority(authModel: AuthorizationModel): boolean;

}
