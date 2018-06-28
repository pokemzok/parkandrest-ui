import {NewUserRequest} from './new/new-user.request';
import {Injectable} from '@angular/core';
import {UserManagement} from './new-user.interface';
import {NewUserResponse} from './new/new-user.response';

@Injectable()
export class UserManagementService implements UserManagement {

  add(request: NewUserRequest): NewUserResponse {
    alert('Implement me'); // TODO: implement
    return new NewUserResponse(null, null, null);
  }

}
