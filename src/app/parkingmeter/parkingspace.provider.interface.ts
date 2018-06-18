import {ParkingSpaceRequest} from './parkingspace.request';
import {ParkingSpaceResponse} from './parkingspace.response';

export interface ParkingSpaceProvider {

  get(request: ParkingSpaceRequest): ParkingSpaceResponse[];
}
