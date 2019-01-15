import {ParkingmeterManagementProvider} from './parkingmeter-management.provider';
import {CheckParkingmeterRequest} from './check/check.parkingmeter.request';
import {Observable, of} from 'rxjs';
import {CheckParkingmeterResponse} from './check/check.parkingmeter.response';
import {StartParkingmeterRequest} from './start/start.parkingmeter.request';
import {StartParkingmeterResponse} from './start/start.parkingmeter.response';
import {StopParkingmeterRequest} from './stop/stop.parkingmeter.request';
import {StopParkingmeterResponse} from './stop/stop.parkingmeter.response';
import {Injectable} from '@angular/core';

@Injectable()
export class MockParkingmeterManagementService implements ParkingmeterManagementProvider {

  constructor() {
  }

  checkParkingSpace(request: CheckParkingmeterRequest): Observable<CheckParkingmeterResponse> {
    return of(
      {
        parkingSpaceStatus: 'FREE',
        registration: '',
        occupationStartDateTime: ''
      }
    );
  }

  start(request: StartParkingmeterRequest): Observable<StartParkingmeterResponse> {
    return of(
      {
        startDateTime: '2018-10-16',
        precalculations: [
          {
            registration: 'XYZ',
            charge: '50',
            currency: 'PLN',
            calculationDateTime: '2018-10-16T17:32',
            periodsQuantity: 1,
            period: 'DAY'
          }
        ]
      }
    );
  }

  stop(request: StopParkingmeterRequest): Observable<StopParkingmeterResponse> {
    return of(
      {
        startDateTime: '2018-10-16T17:32',
        endDateTime: '2018-10-16T19:32',
        amountToPay: '50',
        currency: 'PLN'
      }
    );
  }

}
