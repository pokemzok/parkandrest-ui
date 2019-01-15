import {UsersFilterRequest} from './users.filter-request';
import {UserResponse} from '../user.response';
import {Observable} from 'rxjs';
import {SpringPagedResponse} from '../../common/spring/spring-paged.response';

export interface UsersProvider {

  get(filter: UsersFilterRequest): Observable<SpringPagedResponse<UserResponse[]>>;

}
