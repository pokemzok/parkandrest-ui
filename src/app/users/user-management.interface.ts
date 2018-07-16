import {NewUserRequest} from './new/new-user.request';
import {NewUserResponse} from './new/new-user.response';

export interface UserManagement {
  add(request: NewUserRequest): NewUserResponse;

  activate(username: string);

  deactivate(username: string);
}
