import {AuthService} from './auth.service';
import {LoginRequest} from '../login/login.request';
import {Optional} from '../utils/optional';
import {Authority} from './authority';
import {AuthorizationModel} from './authorization.model';
import {AuthCookiesService} from './authcookies.service';
import {Injectable} from '@angular/core';

@Injectable()
export class MockAuthService implements AuthService {

  private static readonly authorityHeader = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGhvcml0aWVzIjoiT1BFUkFUT1Is' +
    'QURNSU4sRFJJVkVSLE9XTkVSIiwiZXhwIjoxNTIzMzY4ODUxfQ.ina2f-DN7DTJw1bAGYCWYFF46HPRzEIlSkdZd9vNs-ivyjWhJg8wMCsh5XnuLjuvdep' +
    'PbTp5Ey-P0BkZLl2ymw ';

  private static readonly validCredentials = [
    {request: new LoginRequest('admin', 'password'),
      authorization: new AuthorizationModel([Authority.ADMIN], MockAuthService.authorityHeader)},
    {request: new LoginRequest('fulladmin', 'password'),
      authorization: new AuthorizationModel([Authority.ADMIN, Authority.OPERATOR, Authority.OWNER, Authority.DRIVER], MockAuthService.authorityHeader)},
    {request: new LoginRequest('operator', 'password'),
      authorization:  new AuthorizationModel([Authority.OPERATOR], MockAuthService.authorityHeader)},
    {request: new LoginRequest('driver', 'password'),
      authorization:  new AuthorizationModel([Authority.DRIVER], MockAuthService.authorityHeader)},
    {request: new LoginRequest('owner', 'password'), authorization:  new AuthorizationModel([Authority.OWNER], MockAuthService.authorityHeader)}
  ];

  constructor (private authCookiesService: AuthCookiesService) {}

  authenticate(loginRequest: LoginRequest) {
    Optional.of(
      MockAuthService.validCredentials.find(value => value.request.equals(loginRequest))
    ).ifPresent(credential => {
      console.log('Successfully Authenticated!');
      // FIXME: route to the next page
       this.authCookiesService.setAuthCookies(credential.authorization);
    }).orElse(() => {
      console.log('Authentication Failed!'); // TODO show some error
    });
  }

  deauthenticate() {
    // TODO: probably more to this
    this.authCookiesService.clearAuthCookies()
  }
}
