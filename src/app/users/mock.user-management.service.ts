import {NewUserRequest} from './new/new-user.request';
import {Injectable} from '@angular/core';
import {UserResponse} from './user.response';
import {DATE_FORMAT, DATETIME_FORMAT} from '../../environments/environment';
import {UserManagement} from './new-user.interface';
import * as moment from 'moment';
import {MockedUsersCollection} from './mocked-users.collection';
import {NewUserResponse} from './new/new-user.response';

@Injectable()
export class MockUserManagementService implements UserManagement {

  add(request: NewUserRequest): NewUserResponse {
    MockedUsersCollection.add(new UserResponse(request.username, moment().format(DATE_FORMAT), request.isActive, request.authorities));
    return new NewUserResponse(request.username, true, moment().format(DATETIME_FORMAT));
  }

}
