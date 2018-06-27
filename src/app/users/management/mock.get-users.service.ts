import {Injectable} from '@angular/compiler/src/core';
import {UserResponse} from '../user.response';

@Injectable
export class MockGetUsersService {

  userList = [
    new UserResponse(),
    new UserResponse(),
    new UserResponse(),
    new UserResponse(),
    new UserResponse(),
    new UserResponse(),
    new UserResponse(),
    new UserResponse(),
  ];


  get(): UserResponse[] {
    return this.userList;
  }


}
