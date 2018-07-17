import {Injectable} from '@angular/core';
import {Authenticate} from './actions/authenticate';
import {AuthCookiesService} from '../cookies/authcookies.service';
import {AuthorizationModel} from '../auth/authorization.model';
import {Store} from '@ngrx/store';

@Injectable()
export class StoreInitializer {

  constructor(private authStore: Store<AuthorizationModel>, private cookies: AuthCookiesService) {}

  initialize() {
    this.authStore.dispatch(new Authenticate(new AuthorizationModel(this.cookies.authorities, this.cookies.authToken)));
  }
}
