import {LoginRequest} from '../login/login.request';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AuthService} from './auth.service';

@Injectable()
export class AuthenticationService implements  AuthService {


  constructor(private http: HttpClient) {
  }

  authenticate(login: LoginRequest) {
    const url = 'http://localhost:8080/login';
    this.http.post(
      url,
      JSON.stringify(login),
      {responseType: 'text', observe: 'response'}
    ).subscribe(result => {
      console.log('I am here');
      console.log(result);

      /**
       * FIXME url constanses holder, add token to cookies
       * TODO: mocki! na koniec dopiero baw sie w integracje!
       */
    }, error => {
      console.log('I am here');
      console.log(error.status);
    });
  }

  deauthenticate() {
    // FIXME implement
  }

}
