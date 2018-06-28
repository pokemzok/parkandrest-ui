import {UsersFilter} from './users.filter';
import {UserResponse} from '../user.response';

export interface UsersProviderInterface {

  get(filter: UsersFilter): UserResponse[];

}
