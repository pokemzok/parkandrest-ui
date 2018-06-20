import {ParkingSpaceProvider} from './parkingspace.provider.interface';
import {ParkingSpaceResponse} from './parkingspace.response';
import {ParkingSpaceRequest} from './parkingspace.request';
import {Injectable} from '@angular/core';
import * as _ from 'underscore';
import {List} from 'underscore';
import {Optional} from '../api/optional/optional';

@Injectable()
export class MockParkingSpaceService implements ParkingSpaceProvider {

  private parkingSpaces: ParkingSpaceResponse[] = [
    new ParkingSpaceResponse(1, 'FREE', null, null),
    new ParkingSpaceResponse(2, 'FREE', null, null),
    new ParkingSpaceResponse(3, 'FREE', null, null),
    new ParkingSpaceResponse(4, 'OCCUPIED', 'AN01C6831', '2018-06-18 18:02'),
    new ParkingSpaceResponse(5, 'OCCUPIED', 'AB01C6963', '2018-06-18 15:04'),
    new ParkingSpaceResponse(6, 'OCCUPIED', 'AL01C6163', '2018-06-18 17:12'),
    new ParkingSpaceResponse(7, 'MAINTENANCE', null, null),
    new ParkingSpaceResponse(8, 'MAINTENANCE', null, null),
    new ParkingSpaceResponse(9, 'MAINTENANCE', null, null),
    new ParkingSpaceResponse(10, 'FREE', null, null),
    new ParkingSpaceResponse(11, 'FREE', null, null),
    new ParkingSpaceResponse(12, 'FREE', null, null),
    new ParkingSpaceResponse(13, 'OCCUPIED', 'AN01C6832', '2018-06-16 13:02'),
    new ParkingSpaceResponse(14, 'OCCUPIED', 'AB01C6964', '2018-06-16 18:05'),
    new ParkingSpaceResponse(15, 'OCCUPIED', 'AL01C6164', '2018-06-16 20:25'),
    new ParkingSpaceResponse(16, 'MAINTENANCE', null, null),
    new ParkingSpaceResponse(17, 'MAINTENANCE', null, null),
    new ParkingSpaceResponse(18, 'MAINTENANCE', null, null),
    new ParkingSpaceResponse(19, 'FREE', null, null),
    new ParkingSpaceResponse(20, 'FREE', null, null),
    new ParkingSpaceResponse(21, 'FREE', null, null),
    new ParkingSpaceResponse(22, 'OCCUPIED', 'BAL01C614', '2018-06-10 18:02'),
    new ParkingSpaceResponse(23, 'OCCUPIED', 'BWL01C714', '2018-06-10 18:01'),
    new ParkingSpaceResponse(24, 'OCCUPIED', 'MZL01C7M4', '2018-06-10 18:00'),
    new ParkingSpaceResponse(25, 'OCCUPIED', 'RWL01D714', '2018-06-18 18:09'),
  ];

  get(request: ParkingSpaceRequest): ParkingSpaceResponse[] {
    return _.filter(<List<ParkingSpaceResponse>>this.parkingSpaces, value => {
      return new ParkingspaceRequestResponsePredicate(request, value).predicate()
    });
  }

}

export class ParkingspaceRequestResponsePredicate  {

  constructor (private request: ParkingSpaceRequest, private response: ParkingSpaceResponse) {}

  predicate(): boolean {
    if (!_.isEqual(this.request, ParkingSpaceRequest.empty())) {
      return this.equalPredicate(this.request.parkingSpaceId, this.response.parkingSpaceId)
      && this.equalPredicate(this.request.parkingSpaceStatus, this.response.parkingSpaceStatus)
      &&  this.equalPredicate(this.request.registration, this.response.registration)
    } else {
      return true;
    }
  }
  // FIXME: puste stringi, bo dla nich nie dziala
  private equalPredicate(requestParam: any, responseParam: any): boolean {
    return Optional.of(requestParam).isPresent() ? requestParam === responseParam : true;
  }

}
