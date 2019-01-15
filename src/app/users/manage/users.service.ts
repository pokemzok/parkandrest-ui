import {UserResponse} from '../user.response';
import {Injectable} from '@angular/core';
import {UsersFilterRequest} from './users.filter-request';
import {UsersProvider} from './usersProvider';
import {SecureHttpService} from '../../security/http/secure-http.service';
import {SecureRequest} from '../../security/http/secure-request';
import {GET_USERS_URL} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {SpringPagedResponse} from '../../common/spring/spring-paged.response';

@Injectable()
export class UsersService implements UsersProvider {

  constructor (private http: SecureHttpService) {}

  get(filter: UsersFilterRequest): Observable<SpringPagedResponse<UserResponse[]>> {
   return this.http.post(new SecureRequest(GET_USERS_URL, filter))
     .pipe(
       map( response => {
         return response.body ? response.body.content : null;
       })
     );
  }

}
