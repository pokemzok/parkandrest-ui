import {UserResponse} from '../user.response';
import {Injectable} from '@angular/core';
import {MockedUsersCollection} from '../mocked-users.collection';
import {UsersFilter} from './users.filter';
import {UsersProviderInterface} from './users.provider.interface';
import {FilterPredicate} from '../../common/filter/filter.predicate';
import * as _ from 'underscore';
import {List} from 'underscore';

@Injectable()
export class MockUsersService implements UsersProviderInterface {

  get(filter: UsersFilter): UserResponse[] {
    return _.filter(<List<UserResponse>>MockedUsersCollection.users(), value => {
      return new UserRequestResponsePredicate(filter, value).predicate()
    });
  }
}

export class UserRequestResponsePredicate  extends FilterPredicate {

  constructor (private filter: UsersFilter, private response: UserResponse) {
    super();
  }

  predicate(): boolean {
    if (!_.isEqual(this.filter, UsersFilter.empty())) {
      return this.equalPredicate(this.filter.username, this.response.username)
        && this.equalPredicate(this.filter.isActive, this.response.isActive)
        && this.containsPredicate(this.filter.authority, this.response.authorities)
    } else {
      return true;
    }
  }

}
