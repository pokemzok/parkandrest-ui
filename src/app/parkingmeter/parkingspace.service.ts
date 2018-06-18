import {ParkingSpaceProvider} from './parkingspace.provider.interface';
import {ParkingSpaceResponse} from './parkingspace.response';
import {ParkingSpaceRequest} from './parkingspace.request';
import {Injectable} from '@angular/core';

@Injectable()
export class ParkingSpaceService implements ParkingSpaceProvider {

  get(request: ParkingSpaceRequest): ParkingSpaceResponse[] {
    // TODO: get responses from server
    alert('Provide an implementation');
    return null;
  }

}
