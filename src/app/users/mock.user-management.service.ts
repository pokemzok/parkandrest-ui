import {NewUserRequest} from './new/new-user.request';
import {Injectable} from '@angular/core';
import {UserResponse} from './user.response';
import {DATE_FORMAT} from '../../environments/environment';
import {UserManagement} from './new-user.interface';
import * as moment from 'moment';
import {MockedUsersCollection} from './mocked-users.collection';

@Injectable()
export class MockUserManagementService implements UserManagement {

  add(request: NewUserRequest) {
    MockedUsersCollection.add(new UserResponse(request.username, moment().format(DATE_FORMAT), request.isActive, request.authorities));
  }

}
