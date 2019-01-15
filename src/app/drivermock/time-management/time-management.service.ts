import {Injectable} from '@angular/core';
import {SystimeResponse} from './systime.response';
import {Observable} from 'rxjs';
import {SecureHttpService} from '../../security/http/secure-http.service';
import {SecureRequest} from '../../security/http/secure-request';
import {CHANGE_TIME_URL, RESTORE_TIME_URL} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {SystimeChangeRequest} from './systime-change.request';

@Injectable()
export class TimeManagementService {

  constructor(private http: SecureHttpService) {}

  incrementTime(request: SystimeChangeRequest): Observable<SystimeResponse> {
    return this.http.post(new SecureRequest(CHANGE_TIME_URL, request))
      .pipe(
        map( response => {
          return response.body ? response.body.content : null;
        })
      );
  }

  restoreTime(): Observable<SystimeResponse> {
    return this.http.get(new SecureRequest(RESTORE_TIME_URL)).pipe(
      map( response => {
        return response.body ? response.body.content : null;
      })
    );
  }

}
