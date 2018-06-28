import {UserResponse} from '../user.response';
import {Injectable} from '@angular/core';
import {MockedUsersCollection} from '../mocked-users.collection';
import {UsersFilter} from './users.filter';

@Injectable()
export class MockGetUsersService {

  get(filter: UsersFilter): UserResponse[] {
    return MockedUsersCollection.users();
  }


}
