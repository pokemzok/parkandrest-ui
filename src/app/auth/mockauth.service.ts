import {AuthService} from './auth.service';
import {LoginRequest} from '../login/login.request';

export class MockAuthService implements AuthService {

private readonly validCredentials = [
  new LoginRequest('admin', 'password'),
  new LoginRequest('operator', 'password'),
  new LoginRequest('driver', 'password'),
  new LoginRequest('owner', 'password')
];

  authenticate(loginRequest: LoginRequest) {
      this.validCredentials.find(value => value.equals(loginRequest))
  }

}
