import {FILTER_CONFIG} from '../../../environments/environment';
import {SearchUsersForm} from './search-users.form';
import {PaginationModel} from '../../pagination/pagination.model';

export class UsersFilterRequest {

  page: number;
  size: number;
  username: string;
  authority: string;
  isActive: string;

  static empty(): UsersFilterRequest {
    return new UsersFilterRequest(null, null, null, 0 );
  }

  static ofForm(form: SearchUsersForm): UsersFilterRequest {
    return new UsersFilterRequest(form.username, form.authority, form.isActive, 0);
  }

  static ofFormAndPaginationModel(form: SearchUsersForm, paginationModel: PaginationModel): UsersFilterRequest {
    return new UsersFilterRequest(form.username, form.authority, form.isActive, paginationModel.selectedPage);
  }

  constructor(username: string, authority: string, isActive: string, page: number) {
    this.page = page;
    this.size = FILTER_CONFIG.SMALL_PAGE_SIZE;
    this.username = username;
    this.authority = authority;
    this.isActive = isActive;
  }
}
