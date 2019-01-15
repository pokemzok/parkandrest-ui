import {ParkingSpaceProvider} from './parkingspace.provider.interface';
import {ParkingSpaceResponse} from './parkingspace.response';
import {ParkingSpaceFilter} from './parkingspace.filter';
import {Injectable} from '@angular/core';
import {SecureHttpService} from '../security/http/secure-http.service';
import {SecureRequest} from '../security/http/secure-request';
import {GET_PARKING_SPACES_URL} from '../../environments/environment';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {SpringPagedResponse} from '../common/spring/spring-paged.response';

@Injectable()
export class ParkingSpaceService implements ParkingSpaceProvider {

  constructor(private http: SecureHttpService) {}

  get(filter: ParkingSpaceFilter): Observable<SpringPagedResponse<ParkingSpaceResponse[]>> {
    return this.http.post(new SecureRequest(GET_PARKING_SPACES_URL, filter))
      .pipe(
        map( response => {
          return response.body ? response.body.content : null;
        })
      );
  }

}
