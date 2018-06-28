import {UserResponse} from '../user.response';
import {Injectable} from '@angular/core';
import {UsersFilter} from './users.filter';
import {UsersProviderInterface} from './users.provider.interface';

@Injectable()
export class UsersService implements UsersProviderInterface {

  get(filter: UsersFilter): UserResponse[] {
    alert('Implement me'); // TODO
    return [];
  }

}
