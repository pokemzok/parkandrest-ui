import {ParkingmeterManagementProvider} from './parkingmeter-management.provider';
import {CheckParkingmeterRequest} from './check/check.parkingmeter.request';
import {Observable} from 'rxjs';
import {CheckParkingmeterResponse} from './check/check.parkingmeter.response';
import {StartParkingmeterRequest} from './start/start.parkingmeter.request';
import {StartParkingmeterResponse} from './start/start.parkingmeter.response';
import {StopParkingmeterRequest} from './stop/stop.parkingmeter.request';
import {StopParkingmeterResponse} from './stop/stop.parkingmeter.response';
import {SecureHttpService} from '../../security/http/secure-http.service';
import {SecureRequest} from '../../security/http/secure-request';
import {
  CHECK_PARKING_SPACE_URL,
  START_PARKINGMETER_URL,
  STOP_PARKINGMETER_URL
} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class ParkingmeterManagementService implements ParkingmeterManagementProvider {

  constructor(private http: SecureHttpService) {}

  checkParkingSpace(request: CheckParkingmeterRequest): Observable<CheckParkingmeterResponse> {
    return this.http.post(new SecureRequest(CHECK_PARKING_SPACE_URL, request))
      .pipe(
        map(response => {
          return response.body ? response.body.content : null;
        })
      );
  }

  start(request: StartParkingmeterRequest): Observable<StartParkingmeterResponse> {
    return this.http.post(new SecureRequest(START_PARKINGMETER_URL, request))
      .pipe(
        map(response => {
          return response.body ? response.body.content : null;
        })
      );
  }

  stop(request: StopParkingmeterRequest): Observable<StopParkingmeterResponse> {
    return this.http.post(new SecureRequest(STOP_PARKINGMETER_URL, request))
      .pipe(
        map(response => {
          return response.body ? response.body.content : null;
        })
      );
  }

}
