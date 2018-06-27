import {Injectable} from '@angular/compiler/src/core';
import {NewUserRequest} from './new-user.request';
import {EventEmitter} from '@angular/core';
import {UserResponse} from '../user.response';
import moment = require('moment');
import {DATE_FORMAT} from '../../../environments/environment';

@Injectable()
export class MockNewUserService {
// TODO: finish, emit event and receive it
  add(request: NewUserRequest) {
    new EventEmitter().emit(new UserResponse(request.username, moment().format(DATE_FORMAT), request.isActive, request.authorities));
  }

}
