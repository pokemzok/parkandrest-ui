import {Component, Inject, OnInit} from '@angular/core';
import {UsersProvider} from './usersProvider';
import {UserResponse} from '../user.response';
import {UsersFilterRequest} from './users.filter-request';
import {UserManagement} from '../user-management.interface';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TranslatedOptionFactory} from '../../form/select/options/translated-option.factory';
import {SelectOption} from '../../form/select/options/select-option';
import {LabelPosition} from '../../form/label-position';
import {UserAuthorities} from '../users.authorities';
import {VALIDATIONS_CONFIG} from '../../../environments/environment';
import {SearchUsersForm} from './search-users.form';
import {PaginationModel} from '../../pagination/pagination.model';
import {UsersPaginationActionStrategy} from './users.pagination.action.strategy';


@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css']
})
export class UsersManagementComponent implements OnInit {

  usersForm: FormGroup;
  users: UserResponse[];
  authoritiesOptions: SelectOption[];
  booleanOptions: SelectOption[];
  labelPosition = LabelPosition.NONE;
  paginationModel: PaginationModel;
  paginationActionStrategy: UsersPaginationActionStrategy;

  constructor(@Inject('UsersService') private usersService: UsersProvider,
              @Inject('UserManagementService') private userManagementService: UserManagement,
              private optionsFactory: TranslatedOptionFactory
  ) {
    this.authoritiesOptions = optionsFactory.optionsOf('options.authorities.', Object.keys(UserAuthorities));
    this.booleanOptions = optionsFactory.optionsOfBoolean('options.boolean.true', 'options.boolean.false');
    this.filterUsers(UsersFilterRequest.empty());
  }

  ngOnInit() {
    this.usersForm = new FormGroup({
      'username': new FormControl(null, [Validators.maxLength(VALIDATIONS_CONFIG.MAX_TEXT_INPUT_LENGTH)]),
      'authority': new FormControl(null),
      'isActive': new FormControl(null)
    });
    this.paginationActionStrategy = new UsersPaginationActionStrategy(
      this.usersService,
      this.usersForm,
      (response) => this.users = response.content
    );
  }

  deactivate(user: UserResponse) {
    this.userManagementService.deactivate(user.username).subscribe(
      response => {
        this.onSuccessResponse(response, () => {
          user.active = false;
        });
      }
    );
  }

  activate(user: UserResponse) {
    this.userManagementService.activate(user.username).subscribe(
      response => {
        this.onSuccessResponse(response, () => {
          user.active = true;
        });
      }
    );
  }

  onSearch() {
    this.filterUsers(UsersFilterRequest.ofForm(<SearchUsersForm>this.usersForm.getRawValue()));
  }

  private onSuccessResponse(response, successAction: () => void) {
    if (response.status.toString().match('2[0-9][0-9]')) {
      successAction();
    }
  }

  private filterUsers(filter: UsersFilterRequest) {
    this.usersService.get(filter).subscribe(
      response => {
        this.users = response.content;
        this.paginationModel = PaginationModel.of(response);
      }
    );
  }
}
