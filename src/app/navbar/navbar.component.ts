import {Component} from '@angular/core';
import {Authority} from '../auth/authority';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  driverAuthority = [Authority.DRIVER];
  ownerAuthority = [Authority.OWNER];
  adminAuthority = [Authority.ADMIN];
  operatorAuthority = [Authority.OPERATOR];

  constructor() {
  }

}
