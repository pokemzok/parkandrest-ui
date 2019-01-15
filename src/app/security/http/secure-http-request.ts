import {HttpParams} from '@angular/common/http';

export interface SecureHttpRequest {

  url(): string;

  content(): string;

  httpParams(): HttpParams
}
