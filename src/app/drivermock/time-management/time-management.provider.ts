import {Observable} from 'rxjs';
import {SystimeResponse} from './systime.response';
import {SystimeChangeRequest} from './systime-change.request';

export interface TimeManagementProvider {

  incrementTime(request: SystimeChangeRequest): Observable<SystimeResponse>;

  restoreTime(): Observable<SystimeResponse>;
}
