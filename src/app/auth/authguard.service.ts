import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/index';
import {Injectable} from '@angular/core';
import {ProxyAuthService} from './proxyauth.service';
import {TranslatedToastrFacade} from '../toaster/translated-toaster.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: ProxyAuthService,
              private router: Router,
              private toaster: TranslatedToastrFacade) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.isAuthenticated()) {
      this.toaster.warning('notifications.forbidden');
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
