import {NewUserRequest} from './new/new-user.request';
import {NewUserResponse} from './new/new-user.response';
import {Observable} from 'rxjs';

export interface UserManagement {
  add(request: NewUserRequest): Observable<NewUserResponse>;

  activate(username: string): Observable<any>;

  deactivate(username: string): Observable<any>;
}
