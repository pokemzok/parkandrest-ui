import {Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {TranslatedToastrFacade} from '../../common/toaster/translated-toaster.service';
import {Authority} from '../authority';
import {SecureAuthGuard} from './secure-authguard.template';
import {Store} from '@ngrx/store';
import {AuthorizationModel} from '../authorization.model';

@Injectable()
export class DriverAuthGuard extends SecureAuthGuard {

  constructor( authStore: Store<AuthorizationModel>,
               router: Router,
               toaster: TranslatedToastrFacade) {
    super(authStore, router, toaster);
  }

  isUserNotHaveAuthority(authModel: AuthorizationModel): boolean {
    return !authModel.containsAuthority(Authority.DRIVER);
  }

}
