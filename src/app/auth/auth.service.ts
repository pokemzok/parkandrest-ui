import {LoginRequest} from '../login/login.request';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  authenticate(login: LoginRequest) {
    const url = 'http://localhost:8080/login';
    const headers = new HttpHeaders({'Content-Type': 'application/json'}); /*TODO: CORS ( Access-Control-Allow-Origin in response header */
    this.http.post(url, JSON.stringify(login))
      .subscribe(value => {
        console.log(value);

        /**
         * FIXME url constanses holder, add token to cookies
         */
      });
  }
}
