import {AuthService} from './auth.service';
import {LoginRequest} from '../login/login.request';
import {Optional} from '../utils/optional';
import {Authority} from './authority';
import {AuthorizationModel} from './authorization.model';

export class MockAuthService implements AuthService {

  private readonly authorityHeader = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGhvcml0aWVzIjoiT1BFUkFUT1Is' +
    'QURNSU4sRFJJVkVSLE9XTkVSIiwiZXhwIjoxNTIzMzY4ODUxfQ.ina2f-DN7DTJw1bAGYCWYFF46HPRzEIlSkdZd9vNs-ivyjWhJg8wMCsh5XnuLjuvdep' +
    'PbTp5Ey-P0BkZLl2ymw ';

  private readonly validCredentials = [
    {request: new LoginRequest('admin', 'password'),
      authorization: new AuthorizationModel([Authority.ADMIN], this.authorityHeader)},
    {request: new LoginRequest('fulladmin', 'password'),
      authorization: new AuthorizationModel([Authority.ADMIN, Authority.OPERATOR, Authority.OWNER, Authority.DRIVER], this.authorityHeader)},
    {request: new LoginRequest('operator', 'password'),
      authorization:  new AuthorizationModel([Authority.OPERATOR], this.authorityHeader)},
    {request: new LoginRequest('driver', 'password'),
      authorization:  new AuthorizationModel([Authority.DRIVER], this.authorityHeader)},
    {request: new LoginRequest('owner', 'password'), authorization:  new AuthorizationModel([Authority.OWNER], this.authorityHeader)}
  ];

  authenticate(loginRequest: LoginRequest) {
    Optional.of(
      this.validCredentials.find(value => value.request.equals(loginRequest))
    ).ifPresent(credential => {
     // credential.authorization
    });
  }

  deauthenticate() {
    // FIXME implement
  }
}
