import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {TranslatedToastrFacade} from '../../common/toaster/translated-toaster.service';
import {Authority} from '../authority';
import {SecureAuthGuard} from './secure-authguard.template';
import {AuthorizationModel} from '../authorization.model';
import {Store} from '@ngrx/store';

@Injectable()
export class AdminAuthGuard extends SecureAuthGuard {

  constructor(authStore: Store<AuthorizationModel>,
              router: Router,
              toaster: TranslatedToastrFacade) {
    super(authStore, router, toaster);
  }

  isUserNotHaveAuthority(authModel: AuthorizationModel): boolean {
    return !authModel.containsAuthority(Authority.ADMIN);
  }

}
