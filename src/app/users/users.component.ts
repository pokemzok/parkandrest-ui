import { Component, OnInit } from '@angular/core';
import {AuthorityComponentInterface} from '../security/auth/authority-component.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, AuthorityComponentInterface {

  constructor() { }

  ngOnInit() {
  }

}
