import {SecureHttpRequest} from './secure-http-request';
import {HttpParams} from '@angular/common/http';

export class SecureRequest <T> implements SecureHttpRequest {

  constructor( private _url: string, private _content?: T, private _httpParams?: HttpParams) {}

  content(): string {
    return JSON.stringify(this._content);
  }

  url(): string {
    return this._url;
  }

  httpParams(): HttpParams {
    return this._httpParams;
  }

}
