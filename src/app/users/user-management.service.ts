import {NewUserRequest} from './new/new-user.request';
import {Injectable} from '@angular/core';
import {UserManagement} from './new-user.interface';

@Injectable()
export class UserManagementService implements UserManagement {

  add(request: NewUserRequest) {
    alert('Implement me'); // TODO: implement
  }

}
