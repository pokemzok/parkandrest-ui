import {Router} from '@angular/router';
import {Inject, Injectable} from '@angular/core';
import {TranslatedToastrFacade} from '../../../common/toaster/translated-toaster.service';
import {Authority} from '../../auth/authority';
import {SecureAuthGuard} from './secure-authguard.template';
import {Store} from '@ngrx/store';
import {AuthorizationModel} from '../../auth/authorization.model';
import {RoutesWithComponentCollection} from '../routes-with-component.collection.interface';

@Injectable()
export class OwnerAuthGuard extends SecureAuthGuard {

  constructor(authStore: Store<AuthorizationModel>,
              router: Router,
              @Inject('RoutesWithComponentCollection') routesCollection: RoutesWithComponentCollection,
              toaster: TranslatedToastrFacade) {
    super(authStore, router, routesCollection, toaster);
  }

  isUserNotHaveAuthority(authModel: AuthorizationModel): boolean {
    return !authModel.containsAuthority(Authority.OWNER);
  }

}
