import {Inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SecureHttpRequest} from './secure-http-request';
import {SECURITY_CONFIG} from '../../../environments/environment';
import {Store} from '@ngrx/store';
import {AuthorizationModel} from '../auth/authorization.model';
import {map, take, tap} from 'rxjs/internal/operators';
import {Observable} from 'rxjs';
import {HttpResponse} from '@angular/common/http/src/response';
import {flatMap} from 'rxjs/operators';
import {ErrorHandler} from '../../common/http/error.handler';

@Injectable()
export class SecureHttpService {

  constructor(private http: HttpClient, private authStore: Store<AuthorizationModel>, @Inject('ErrorHandler') private errorHandler: ErrorHandler) {
    this.authStore.select('authorization').pipe(take(1)).pipe(map(authModel => {
      return authModel.authenticationHeader
    }));
  }

  delete (request: SecureHttpRequest): Observable<HttpResponse<any>> {
    return this.headers().pipe(take(1))
      .pipe(
        flatMap(headers => {
          return this.http.delete(
            request.url(),
            {
              headers: headers,
              observe: 'response',
              params: request.httpParams()
            }
          ).pipe(
            tap(
              response => this.errorHandler.handle(response),
              response => this.errorHandler.handle(response)
            )
          );
        })
      );
  }

  put(request: SecureHttpRequest): Observable<HttpResponse<any>> {

    return this.headers().pipe(take(1))
      .pipe(
        flatMap(headers => {
          return this.http.put(
            request.url(),
            request.content(),
            {
              headers: headers,
              observe: 'response',
              params: request.httpParams()
            }
          ).pipe(
            tap(
              response => this.errorHandler.handle(response),
              response => this.errorHandler.handle(response)
              )
          )
        })
      );
  }

  putUnhandled(request: SecureHttpRequest): Observable<HttpResponse<any>> {

    return this.headers().pipe(take(1))
      .pipe(
        flatMap(headers => {
          return this.http.put(
            request.url(),
            request.content(),
            {
              headers: headers,
              observe: 'response',
              params: request.httpParams()
            }
          )
        })
      );
  }

  post(request: SecureHttpRequest): Observable<HttpResponse<any>> {

    return this.headers().pipe(take(1))
      .pipe(
        flatMap(headers => {
          return this.http.post(
            request.url(),
            request.content(),
            {
              headers: headers,
              observe: 'response',
              params: request.httpParams()
            }
          ).pipe(
            tap(
              response => this.errorHandler.handle(response),
              response => this.errorHandler.handle(response)
            )
          );
        })
      );

  }

  postUnhandled(request: SecureHttpRequest): Observable<HttpResponse<any>> {

    return this.headers().pipe(take(1))
      .pipe(
        flatMap(headers => {
          return this.http.post(
            request.url(),
            request.content(),
            {
              headers: headers,
              observe: 'response',
              params: request.httpParams()
            }
          )
        })
      );

  }

  get(request: SecureHttpRequest): Observable<HttpResponse<any>> {

    return this.headers().pipe(take(1))
      .pipe(
        flatMap(headers => {
          return this.http.get(
            request.url(),
            {
              headers: headers,
              observe: 'response',
              params: request.httpParams()
            }
          );
        })
      ).pipe(
        tap(
          response => this.errorHandler.handle(response),
          response => this.errorHandler.handle(response)
        )
      );

  }

  getUnhandled(request: SecureHttpRequest): Observable<HttpResponse<any>> {

    return this.headers().pipe(take(1))
      .pipe(
        flatMap(headers => {
          return this.http.get(
            request.url(),
            {
              headers: headers,
              observe: 'response',
              params: request.httpParams()
            }
          );
        })
      );

  }

  private headers(): Observable<HttpHeaders> {
    return this.authStore.select('authorization').pipe(take(1)).pipe(map(authModel => {
      return new HttpHeaders()
        .append(SECURITY_CONFIG.AUTHORIZATION_HEADER, authModel.authenticationHeader)
        .append('Content-Type', 'application/json');
    }));
  }
}
