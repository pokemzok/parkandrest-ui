import {ParkingSpaceProvider} from './parkingspace.provider.interface';
import {ParkingSpaceResponse} from './parkingspace.response';
import {ParkingSpaceRequest} from './parkingspace.request';
import {ParkingSpaceStatus} from './parkingspace.status';
import {Injectable} from '@angular/core';

@Injectable()
export class MockParkingSpaceService implements ParkingSpaceProvider {

  private parkingSpaces: ParkingSpaceResponse[] = [
    new ParkingSpaceResponse(1, ParkingSpaceStatus.FREE, null, null),
    new ParkingSpaceResponse(2, ParkingSpaceStatus.FREE, null, null),
    new ParkingSpaceResponse(3, ParkingSpaceStatus.FREE, null, null),
    new ParkingSpaceResponse(4, ParkingSpaceStatus.OCCUPIED, 'AN01C6831', '2018-06-18 18:02'),
    new ParkingSpaceResponse(5, ParkingSpaceStatus.OCCUPIED, 'AB01C6963', '2018-06-18 15:04'),
    new ParkingSpaceResponse(6, ParkingSpaceStatus.OCCUPIED, 'AL01C6163', '2018-06-18 17:12'),
    new ParkingSpaceResponse(7, ParkingSpaceStatus.MAINTENANCE, null, null),
    new ParkingSpaceResponse(8, ParkingSpaceStatus.MAINTENANCE, null, null),
    new ParkingSpaceResponse(9, ParkingSpaceStatus.MAINTENANCE, null, null),
    new ParkingSpaceResponse(10, ParkingSpaceStatus.FREE, null, null),
    new ParkingSpaceResponse(11, ParkingSpaceStatus.FREE, null, null),
    new ParkingSpaceResponse(12, ParkingSpaceStatus.FREE, null, null),
    new ParkingSpaceResponse(13, ParkingSpaceStatus.OCCUPIED, 'AN01C6832', '2018-06-16 13:02'),
    new ParkingSpaceResponse(14, ParkingSpaceStatus.OCCUPIED, 'AB01C6964', '2018-06-16 18:05'),
    new ParkingSpaceResponse(15, ParkingSpaceStatus.OCCUPIED, 'AL01C6164', '2018-06-16 20:25'),
    new ParkingSpaceResponse(16, ParkingSpaceStatus.MAINTENANCE, null, null),
    new ParkingSpaceResponse(17, ParkingSpaceStatus.MAINTENANCE, null, null),
    new ParkingSpaceResponse(18, ParkingSpaceStatus.MAINTENANCE, null, null),
    new ParkingSpaceResponse(19, ParkingSpaceStatus.FREE, null, null),
    new ParkingSpaceResponse(20, ParkingSpaceStatus.FREE, null, null),
    new ParkingSpaceResponse(21, ParkingSpaceStatus.FREE, null, null),
    new ParkingSpaceResponse(22, ParkingSpaceStatus.OCCUPIED, 'BAL01C614', '2018-06-10 18:02'),
    new ParkingSpaceResponse(23, ParkingSpaceStatus.OCCUPIED, 'BWL01C714', '2018-06-10 18:01'),
    new ParkingSpaceResponse(24, ParkingSpaceStatus.OCCUPIED, 'MZL01C7M4', '2018-06-10 18:00'),
    new ParkingSpaceResponse(25, ParkingSpaceStatus.OCCUPIED, 'RWL01D714', '2018-06-18 18:09'),
  ];

  get(request: ParkingSpaceRequest): ParkingSpaceResponse[] {
    // TODO: filter results using uderscore
    return this.parkingSpaces;
  }

}
