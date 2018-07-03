import {Component, Inject, OnInit} from '@angular/core';
import {UsersProviderInterface} from './users.provider.interface';
import {UserResponse} from '../user.response';
import {UsersFilter} from './users.filter';
import {UserManagement} from '../new-user.interface';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css']
})
export class UsersManagementComponent implements OnInit {

  users: UserResponse[];
  filter = new UsersFilter();

  constructor( @Inject('UsersService') private usersService: UsersProviderInterface , @Inject('UserManagementService')  private userManagementService: UserManagement) {
    this.users = usersService.get(this.filter);
  }

  ngOnInit() {}

  deactivate(user: UserResponse) {
    this.userManagementService.deactivate(user.username);
  }

  activate(user: UserResponse) {
    this.userManagementService.activate(user.username);
  }

}
