import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/index';
import {Inject, Injectable} from '@angular/core';
import {TranslatedToastrFacade} from '../toaster/translated-toaster.service';
import {ENVIRONMENT} from '../../environments/environment';
import {Auth} from './auth.interface';

@Injectable()
export class AuthGuard implements CanActivate {

  private static noAuthModeAvailable(): boolean {
    return ENVIRONMENT.PRODUCTION !== true && ENVIRONMENT.NO_AUTH_MODE
  }

  constructor(@Inject('AuthService')private authService: Auth,
              private router: Router,
              private toaster: TranslatedToastrFacade) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.isAuthenticated() && !AuthGuard.noAuthModeAvailable()) {
      this.toaster.warning('notifications.forbidden');
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }



}
