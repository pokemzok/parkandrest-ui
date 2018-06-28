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
  json: string;
  constructor( @Inject('UsersService') private usersService: UsersProviderInterface ) {
    this.users = usersService.get(this.filter);
    this.json = JSON.stringify(this.users);
  }

  ngOnInit() {

  }

}
