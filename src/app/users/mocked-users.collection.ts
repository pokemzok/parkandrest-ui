import {UserAuthorities} from './users.authorities';
import {UserResponse} from './user.response';

export class MockedUsersCollection {

  private static userList = [
    new UserResponse('superadmin', '2018-06-28', true, Object.keys(UserAuthorities)),
    new UserResponse('admin', '2018-06-28', true, Object.keys(UserAuthorities.ADMIN)),
    new UserResponse('operator', '2018-06-28', true, Object.keys(UserAuthorities.OPERATOR)),
    new UserResponse('driver', '2018-06-28', true, Object.keys(UserAuthorities.DRIVER)),
    new UserResponse('owner', '2018-06-28', true, Object.keys(UserAuthorities.OWNER)),

  ];

  static add(user: UserResponse) {
    MockedUsersCollection.userList.push(user);
  }

  static users() {
    return MockedUsersCollection.userList;
  }
}
