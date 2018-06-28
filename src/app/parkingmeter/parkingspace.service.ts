import {ParkingSpaceProvider} from './parkingspace.provider.interface';
import {ParkingSpaceResponse} from './parkingspace.response';
import {ParkingSpaceFilter} from './parkingspace.filter';
import {Injectable} from '@angular/core';

@Injectable()
export class ParkingSpaceService implements ParkingSpaceProvider {

  get(filter: ParkingSpaceFilter): ParkingSpaceResponse[] {
    // TODO: get responses from server
    alert('Provide an implementation');
    return null;
  }

}
