
import {FormGroup} from '@angular/forms';
import {PaginationActionStrategy} from '../../pagination/pagination.action.strategy';
import {UsersProvider} from './usersProvider';
import {PaginationModel} from '../../pagination/pagination.model';
import {UsersFilterRequest} from './users.filter-request';
import {SearchUsersForm} from './search-users.form';

export class UsersPaginationActionStrategy  implements PaginationActionStrategy {

  private readonly usersService: UsersProvider;
  private readonly usersForm: FormGroup;
  private readonly subscribeAction: (response) => void;

  constructor(parkingSpaceService: UsersProvider, parkingMeterForm: FormGroup, subscribeAction: (response) => void) {
    this.usersService = parkingSpaceService;
    this.usersForm = parkingMeterForm;
    this.subscribeAction = subscribeAction;
  }

  apply(paginationModel: PaginationModel) {
    this.usersService.get(UsersFilterRequest.ofFormAndPaginationModel(<SearchUsersForm>this.usersForm.getRawValue(), paginationModel))
      .subscribe(
        response => this.subscribeAction(response)
      );
  }

}
