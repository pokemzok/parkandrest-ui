import {Component, Inject, OnInit} from '@angular/core';
import {UsersProviderInterface} from './users.provider.interface';
import {UserResponse} from '../user.response';
import {UsersFilter} from './users.filter';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.css']
})
export class UsersManagementComponent implements OnInit {

  users: UserResponse[];
  filter = new UsersFilter();

  constructor( @Inject('UsersService') private usersService: UsersProviderInterface ) {
    this.users = usersService.get(this.filter);
  }

  ngOnInit() {}

  deactivate(user: UserResponse) {
    alert(user.username + ' Deactivated (TODO: implement real action)'); // TODO: implement real action
  }

  activate(user: UserResponse) {
    alert(user.username + ' Activated (TODO: implement real action)'); // TODO: implement real action
  }

}
