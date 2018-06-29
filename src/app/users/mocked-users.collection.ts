import {UserAuthorities} from './users.authorities';
import {UserResponse} from './user.response';

export class MockedUsersCollection {

  private static userList = [
    new UserResponse('superadmin', '2018-06-28', true, Object.keys(UserAuthorities)),
    new UserResponse('admin', '2018-06-28', true, [UserAuthorities.ADMIN.toString()]),
    new UserResponse('operator', '2018-06-28', true, [UserAuthorities.OPERATOR.toString()]),
    new UserResponse('driver', '2018-06-28', true, [UserAuthorities.DRIVER.toString()]),
    new UserResponse('inactive_driver', '2018-06-28', false, [UserAuthorities.DRIVER.toString()]),
    new UserResponse('owner', '2018-06-28', true, [UserAuthorities.OWNER.toString()])
  ];

  static add(user: UserResponse) {
    MockedUsersCollection.userList.push(user);
  }

  static users() {
    return MockedUsersCollection.userList;
  }
}
