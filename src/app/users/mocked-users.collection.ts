import {UserAuthorities} from './users.authorities';
import {UserResponse} from './user.response';
import * as _ from 'underscore';

export class MockedUsersCollection {

  private static userList = [
    new UserResponse('superadmin', '2018-06-28', true.toString(), Object.keys(UserAuthorities)),
    new UserResponse('admin', '2018-06-28', true.toString(), [UserAuthorities.ADMIN.toString()]),
    new UserResponse('operator', '2018-06-28', true.toString(), [UserAuthorities.OPERATOR.toString()]),
    new UserResponse('driver', '2018-06-28', true.toString(), [UserAuthorities.DRIVER.toString()]),
    new UserResponse('inactive_driver', '2018-06-28', false.toString(), [UserAuthorities.DRIVER.toString()]),
    new UserResponse('owner', '2018-06-28', true.toString(), [UserAuthorities.OWNER.toString()])
  ];

  static add(user: UserResponse) {
    MockedUsersCollection.userList.push(user);
  }

  static users() {
    return MockedUsersCollection.userList;
  }

  static getByUsername(username: string): UserResponse {
    return _.findWhere(MockedUsersCollection.userList, {username: username});
  }
}
