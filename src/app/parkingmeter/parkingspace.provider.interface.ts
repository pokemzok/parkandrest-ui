import {ParkingSpaceFilter} from './parkingspace.filter';
import {ParkingSpaceResponse} from './parkingspace.response';

export interface ParkingSpaceProvider {

  get(filter: ParkingSpaceFilter): ParkingSpaceResponse[];
}
