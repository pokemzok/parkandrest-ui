import {ParkingSpaceRequest} from './parkingspace.filter';
import {ParkingSpaceResponse} from './parkingspace.response';

export interface ParkingSpaceProvider {

  get(request: ParkingSpaceRequest): ParkingSpaceResponse[];
}
