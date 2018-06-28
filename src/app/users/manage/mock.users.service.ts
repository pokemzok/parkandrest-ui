import {UserResponse} from '../user.response';
import {Injectable} from '@angular/core';
import {MockedUsersCollection} from '../mocked-users.collection';
import {UsersFilter} from './users.filter';
import {UsersProviderInterface} from './users.provider.interface';

@Injectable()
export class MockUsersService implements UsersProviderInterface {

  get(filter: UsersFilter): UserResponse[] {
    // TODO: filter results
    return MockedUsersCollection.users();
  }


}
