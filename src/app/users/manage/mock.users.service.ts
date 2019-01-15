import {UserResponse} from '../user.response';
import {Injectable} from '@angular/core';
import {MockedUsersCollection} from '../mocked-users.collection';
import {UsersFilterRequest} from './users.filter-request';
import {UsersProvider} from './usersProvider';
import {FilterPredicate} from '../../common/filter/filter.predicate';
import * as _ from 'underscore';
import {List} from 'underscore';
import {Observable, of} from 'rxjs';
import {SpringPagedResponse} from '../../common/spring/spring-paged.response';

@Injectable()
export class MockUsersService implements UsersProvider {

  get(filter: UsersFilterRequest): Observable<SpringPagedResponse<UserResponse[]>> {
    return of(
      <SpringPagedResponse<UserResponse[]>>{
        first: null,
        last: null,
        number: null,
        numberOfElements: null,
        size: null,
        totalElement: null,
        totalPages: 1,
        pageable: null,
        sort: null,
        content:
          _.filter(<List<UserResponse>>MockedUsersCollection.users(), value => {
            return new UserRequestResponsePredicate(filter, value).predicate()
          })
      }
    );
  }
}

export class UserRequestResponsePredicate extends FilterPredicate {

  constructor(private filter: UsersFilterRequest, private response: UserResponse) {
    super();
  }

  predicate(): boolean {
    if (!_.isEqual(this.filter, UsersFilterRequest.empty())) {
      return this.equalPredicate(this.filter.username, this.response.username)
        && this.equalPredicate(this.filter.isActive, '' + this.response.active)
        && this.containsPredicate(this.filter.authority, this.response.authorities)
    } else {
      return true;
    }
  }

}
