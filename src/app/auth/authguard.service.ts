import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/index';
import {Injectable} from '@angular/core';
import {ProxyAuthService} from './proxyauth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor (private authService: ProxyAuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.isAuthenticated()) {
      this.router.navigate(['/login']);
    }
    return true;
  }

}
