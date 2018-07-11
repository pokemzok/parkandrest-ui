import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/index';
import {Injectable} from '@angular/core';
import {TranslatedToastrFacade} from '../../common/toaster/translated-toaster.service';
import {AuthorityToComponentMapping} from '../authority-component.mapping';
import {RoutesDefinitionsCollection} from '../../routes-definitions.collection';
import {AuthorizationModel} from '../authorization.model';
import {Store} from '@ngrx/store';
import {map} from 'rxjs/internal/operators';

@Injectable()
export class LoginAuthGuard implements CanActivate {

  constructor(private router: Router,
              private toaster: TranslatedToastrFacade,
              private authStore: Store<AuthorizationModel>) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.authStore.select('authorization').pipe(map(
      authModel => {
        if (authModel.containsSecurityToken()) {
          this.toaster.warning('notifications.loginForbidden');
          const selectedRoute = RoutesDefinitionsCollection
            .getInstance()
            .getFirstRouteByComponent(AuthorityToComponentMapping.getFirstForAuthorities(authModel.authorities));
          this.router.navigateByUrl(selectedRoute.path);
          return false;
        }
        return true;
      },
      reason => {
        return this.rejectionHandler(reason)
      }
    ));
  }


  private rejectionHandler(reason): boolean {
    console.log(reason.toString());
    this.toaster.error('notifications.authStoreFailure');
    return false;
  }
}
