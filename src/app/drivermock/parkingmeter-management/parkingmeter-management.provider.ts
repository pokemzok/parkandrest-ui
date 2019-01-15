import {Observable} from 'rxjs';
import {StartParkingmeterResponse} from './start/start.parkingmeter.response';
import {StartParkingmeterRequest} from './start/start.parkingmeter.request';
import {StopParkingmeterRequest} from './stop/stop.parkingmeter.request';
import {StopParkingmeterResponse} from './stop/stop.parkingmeter.response';
import {CheckParkingmeterRequest} from './check/check.parkingmeter.request';
import {CheckParkingmeterResponse} from './check/check.parkingmeter.response';

export interface ParkingmeterManagementProvider {

  start(request: StartParkingmeterRequest): Observable<StartParkingmeterResponse>;

  stop(request: StopParkingmeterRequest): Observable<StopParkingmeterResponse>;

  checkParkingSpace(request: CheckParkingmeterRequest): Observable<CheckParkingmeterResponse>;
}
