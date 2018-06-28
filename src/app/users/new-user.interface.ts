import {NewUserRequest} from './new/new-user.request';

export interface UserManagement {
  add(request: NewUserRequest);
}
