import {Component, OnInit} from '@angular/core';
import {Authority} from '../auth/authority';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  driverAuthority = Authority.DRIVER;

  constructor() { }

  ngOnInit() {
  }

}
