import {ParkingSpaceFilter} from './parkingspace.filter';
import {ParkingSpaceResponse} from './parkingspace.response';
import {Observable} from 'rxjs';
import {SpringPagedResponse} from '../common/spring/spring-paged.response';

export interface ParkingSpaceProvider {

  get(filter: ParkingSpaceFilter): Observable<SpringPagedResponse<ParkingSpaceResponse[]>>;
}
