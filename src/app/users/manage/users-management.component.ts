import {Component, Inject, OnInit} from '@angular/core';
import {UsersProviderInterface} from './users.provider.interface';
import {UserResponse} from '../user.response';
import {UsersFilter} from './users.filter';
import {UserManagement} from '../new-user.interface';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TranslatedOptionFactory} from '../../form/select/options/translated-option.factory';
import {SelectOption} from '../../form/select/options/select-option';
import {LabelPosition} from '../../form/LabelPosition';
import {UserAuthorities} from '../users.authorities';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css']
})
export class UsersManagementComponent implements OnInit {

  usersForm: FormGroup;
  users: UserResponse[];
  filter = UsersFilter.empty();
  authoritiesOptions: SelectOption[];
  booleanOptions: SelectOption[];
  labelPosition = LabelPosition.NONE;

  constructor(@Inject('UsersService') private usersService: UsersProviderInterface,
              @Inject('UserManagementService')  private userManagementService: UserManagement,
              private optionsFactory: TranslatedOptionFactory
  ) {
    this.users = usersService.get(this.filter);
    this.authoritiesOptions = optionsFactory.optionsOf('options.authorities.', Object.keys(UserAuthorities));
    this.booleanOptions = optionsFactory.optionsOfBoolean('options.boolean.true', 'options.boolean.false');
  }

  ngOnInit() {
    this.usersForm = new FormGroup({
      'username': new FormControl(null, [Validators.maxLength(255)]),
      'authority': new FormControl(null),
      'active': new FormControl(null)
    })
  }

  onSearch() {
    this.filter = this.usersForm.getRawValue();
    this.users = this.usersService.get(this.filter);
  }

  deactivate(user: UserResponse) {
    this.userManagementService.deactivate(user.username);
  }

  activate(user: UserResponse) {
    this.userManagementService.activate(user.username);
  }

}
