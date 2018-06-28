import {NewUserRequest} from './new-user.request';

export interface NewUser {
  add(request: NewUserRequest);
}
