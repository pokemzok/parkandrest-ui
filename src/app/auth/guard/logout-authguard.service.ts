import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {TranslatedToastrFacade} from '../../common/toaster/translated-toaster.service';
import {SecureAuthGuard} from './secure-authguard.template';
import {Store} from '@ngrx/store';
import {AuthorizationModel} from '../authorization.model';

@Injectable()
export class LogoutAuthGuard extends SecureAuthGuard {

  constructor( authStore: Store<AuthorizationModel>,
               router: Router,
               toaster: TranslatedToastrFacade) {
    super(authStore, router, toaster);
  }

  isUserNotHaveAuthority(authModel: AuthorizationModel): boolean {
    return false;
  }

}
