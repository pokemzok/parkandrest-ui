import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/index';
import {Inject, Injectable} from '@angular/core';
import {TranslatedToastrFacade} from '../../common/toaster/translated-toaster.service';
import {AuthorizationModel} from '../auth/authorization.model';
import {Store} from '@ngrx/store';
import {map, take} from 'rxjs/internal/operators';
import {RoutesWithComponentCollection} from '../routes/routes-with-component.collection.interface';

@Injectable()
export class LoginAuthGuard implements CanActivate {

  constructor(private router: Router,
              private toaster: TranslatedToastrFacade,
              @Inject('RoutesWithComponentCollection') private routesCollection: RoutesWithComponentCollection,
              private authStore: Store<AuthorizationModel>) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.authStore.select('authorization').pipe(take(1)).pipe(map(
      authModel => {
        if (authModel.containsSecurityToken()) {
          this.toaster.warning('notifications.loginForbidden');
          const selectedRoute = this.routesCollection.getFirstRouteByAuthorities(authModel.authorities);
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
