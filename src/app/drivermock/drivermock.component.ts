import { Component, OnInit } from '@angular/core';
import {AuthorityComponent} from '../auth/authority.component';

@Component({
  selector: 'app-drivermock',
  templateUrl: './drivermock.component.html',
  styleUrls: ['./drivermock.component.css']
})
export class DrivermockComponent implements OnInit, AuthorityComponent {

  constructor() { }

  ngOnInit() {
  }

}
