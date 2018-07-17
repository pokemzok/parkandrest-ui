import { Component, OnInit } from '@angular/core';
import {AuthorityComponent} from '../security/auth/authority.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AuthorityComponent {

  constructor() { }

  ngOnInit() {
  }

}
