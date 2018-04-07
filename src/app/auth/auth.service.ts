import {LoginRequest} from '../login/login.request';
import {HttpClient} from '@angular/common/http';
import { Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  authenticate(login: LoginRequest) {
    this.http.post('http://localhost:8080/login', JSON.stringify(login))
      .subscribe(value => {
        console.log(value);

        /**
         * FIXME url constanses holder, add token to cookies
         */
      });
  }
}
