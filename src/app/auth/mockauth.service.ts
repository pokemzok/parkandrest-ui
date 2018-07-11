import {Auth} from './auth.interface';
import {LoginRequest} from '../login/login.request';
import {Optional} from '../common/optional/optional';
import {Authority} from './authority';
import {AuthorizationModel} from './authorization.model';
import {AuthCookiesService} from './cookies/authcookies.service';
import {Injectable} from '@angular/core';
import {TranslatedToastrFacade} from '../common/toaster/translated-toaster.service';
import {Router} from '@angular/router';
import {AuthorityToComponentMapping} from './authority-component.mapping';
import {RoutesDefinitionsCollection} from '../routes-definitions.collection';
import {Store} from '@ngrx/store';
import {Authenticate} from './store/actions/authenticate';
import {Deauthenticate} from './store/actions/deauthenticate';

@Injectable()
export class MockAuthService implements Auth {

  private static readonly authorityHeader = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGhvcml0aWVzIjoiT1BFUkFUT1Is' +
    'QURNSU4sRFJJVkVSLE9XTkVSIiwiZXhwIjoxNTIzMzY4ODUxfQ.ina2f-DN7DTJw1bAGYCWYFF46HPRzEIlSkdZd9vNs-ivyjWhJg8wMCsh5XnuLjuvdep' +
    'PbTp5Ey-P0BkZLl2ymw ';

  private static readonly validCredentials = [
    {
      request: new LoginRequest('admin', 'password'),
      authorization: new AuthorizationModel([Authority.ADMIN], MockAuthService.authorityHeader)
    },
    {
      request: new LoginRequest('fulladmin', 'password'),
      authorization: new AuthorizationModel([Authority.ADMIN, Authority.OPERATOR, Authority.OWNER, Authority.DRIVER], MockAuthService.authorityHeader)
    },
    {
      request: new LoginRequest('operator', 'password'),
      authorization: new AuthorizationModel([Authority.OPERATOR], MockAuthService.authorityHeader)
    },
    {
      request: new LoginRequest('driver', 'password'),
      authorization: new AuthorizationModel([Authority.DRIVER], MockAuthService.authorityHeader)
    },
    {request: new LoginRequest('owner', 'password'), authorization: new AuthorizationModel([Authority.OWNER], MockAuthService.authorityHeader)}
  ];

  constructor(
    private authCookiesService: AuthCookiesService,
    private toasterService: TranslatedToastrFacade,
    private router: Router,
    private authStore: Store<{authorization: AuthorizationModel}>
  ) {}

  authenticate(loginRequest: LoginRequest) {
    Optional.of(
      MockAuthService.validCredentials.find(value => value.request.equals(loginRequest))
    ).ifPresent(credential => {
      this.toasterService.success('notifications.authenticated');
      this.authCookiesService.setAuthCookies(credential.authorization);
      this.authStore.dispatch(new Authenticate(credential.authorization));
      const selectedRoute = RoutesDefinitionsCollection
        .getInstance()
        .getFirstRouteByComponent(
          AuthorityToComponentMapping.getFirstForAuthorities(credential.authorization.authorities)
        );
      this.router.navigateByUrl(selectedRoute.path);
    }).orElse(() => {
      this.toasterService.error('notifications.authfailure');
    });
  }

  deauthenticate() {
    this.authCookiesService.clearAuthCookies();
    this.authStore.dispatch(new Deauthenticate());
    const loginRoute = RoutesDefinitionsCollection
      .getInstance()
      .getLoginRoute();
    this.router.navigateByUrl(loginRoute.path);
  }

}
