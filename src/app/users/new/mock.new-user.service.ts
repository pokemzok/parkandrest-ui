import {NewUserRequest} from './new-user.request';
import {Injectable} from '@angular/core';
import {UserResponse} from '../user.response';
import {DATE_FORMAT} from '../../../environments/environment';
import {NewUser} from './new-user.interface';
import * as moment from 'moment';
import {MockedUsersCollection} from '../mocked-users.collection';

@Injectable()
export class MockNewUserService implements NewUser {

  add(request: NewUserRequest) {
    MockedUsersCollection.add(new UserResponse(request.username, moment().format(DATE_FORMAT), request.isActive, request.authorities));
  }

}
