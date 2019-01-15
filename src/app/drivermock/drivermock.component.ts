import {Component, OnInit} from '@angular/core';
import {AuthorityComponent} from '../security/auth/authority.component';
import {ENVIRONMENT} from '../../environments/environment';

@Component({
  selector: 'app-drivermock',
  templateUrl: './drivermock.component.html',
  styleUrls: ['./drivermock.component.css']
})
export class DrivermockComponent implements OnInit, AuthorityComponent {

  isAvailable = !ENVIRONMENT.PRODUCTION && !ENVIRONMENT.SERVER_OFFLINE;

  constructor() {
  }

  ngOnInit() {
  }

}
