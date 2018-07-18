import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {TranslatedToastrFacade} from '../../../common/toaster/translated-toaster.service';
import {AuthorizationModel} from '../../auth/authorization.model';
import {Store} from '@ngrx/store';
import {map, take} from 'rxjs/internal/operators';
import {Observable} from 'rxjs/index';
import {RoutesWithComponentCollection} from '../routes-with-component.collection.interface';

export abstract class SecureAuthGuard implements CanActivate {

  protected constructor(protected authStore: Store<AuthorizationModel>,
              protected router: Router,
              private routesCollection: RoutesWithComponentCollection,
              protected toaster: TranslatedToastrFacade) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authStore.select('authorization').pipe(take(1)).pipe(map(
      authModel => {
        if (!authModel.containsSecurityToken()) {
          this.toaster.warning('notifications.forbidden');
          this.router.navigateByUrl(
            this.routesCollection.getLoginRoute().path
          );
          return false;
        } else if (this.isUserNotHaveAuthority(authModel)) {
          this.toaster.warning('notifications.unauthorized');
          const selectedRoute = this.routesCollection.getFirstRouteByAuthorities(authModel.authorities);
          this.router.navigateByUrl(selectedRoute.path);
          return false;
        }
        return true;
      }));
  }

  abstract isUserNotHaveAuthority(authModel: AuthorizationModel): boolean;

}
