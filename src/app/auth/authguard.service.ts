import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/index';
import {Injectable} from '@angular/core';
import {ProxyAuthService} from './proxyauth.service';
import {ToastrService} from 'ngx-toastr';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor (
    private authService: ProxyAuthService,
    private router: Router,
    private toasterService: ToastrService,
    private translate: TranslateService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.authService.isAuthenticated()) {
      this.translate.get('notifications.forbidden').subscribe((notification: string) => {
        this.toasterService.success(notification);
      });
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }

}
