import {NewUserRequest} from './new/new-user.request';
import {Injectable} from '@angular/core';
import {UserResponse} from './user.response';
import {DATE_FORMAT, DATETIME_FORMAT} from '../../environments/environment';
import {UserManagement} from './user-management.interface';
import * as moment from 'moment';
import {MockedUsersCollection} from './mocked-users.collection';
import {NewUserResponse} from './new/new-user.response';
import {Optional} from '../common/optional/optional';
import {TranslatedToastrFacade} from '../common/toaster/translated-toaster.service';

@Injectable()
export class MockUserManagementService implements UserManagement {

  constructor(private toastr: TranslatedToastrFacade) {}

  add(request: NewUserRequest): NewUserResponse {
    MockedUsersCollection.add(new UserResponse(request.username, moment().format(DATE_FORMAT), request.isActive.toString(), request.authorities));
    this.toastr.success('notifications.userCreationSuccess');
    return new NewUserResponse(request.username, true, moment().format(DATETIME_FORMAT));
  }

  activate(username: string) {
    Optional.of(MockedUsersCollection.getByUsername(username)).ifPresent(
      user => user.isActive = true.toString()
    );
    this.toastr.success('notifications.userActivationSuccess');
  }

  deactivate(username: string) {
    Optional.of(MockedUsersCollection.getByUsername(username)).ifPresent(
      user => user.isActive = false.toString()
    );
    this.toastr.success('notifications.userDeactivationSuccess');
  }

}
