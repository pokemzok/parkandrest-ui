import { Component, OnInit } from '@angular/core';
import {AuthorityComponentInterface} from '../security/auth/authority-component.interface';

@Component({
  selector: 'app-drivermock',
  templateUrl: './drivermock.component.html',
  styleUrls: ['./drivermock.component.css']
})
export class DrivermockComponent implements OnInit, AuthorityComponentInterface {

  constructor() { }

  ngOnInit() {
  }

}
