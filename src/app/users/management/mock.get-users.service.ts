import {UserResponse} from '../user.response';
import {Injectable} from '@angular/core';
import {MockedUsersCollection} from '../mocked-users.collection';

@Injectable()
export class MockGetUsersService {

  get(): UserResponse[] {
    return MockedUsersCollection.users();
  }


}
