import {Component, OnInit} from '@angular/core';
import {Authority} from '../auth/authority';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  driverAuthority = [Authority.DRIVER];
  ownerAuthority = [Authority.OWNER];
  adminAuthority = [Authority.ADMIN];
  operatorAuthority = [Authority.OPERATOR];

  private selectedLinkId = null;

  constructor() { }

  ngOnInit() {
  }

  markAsClicked(linkId: string) {
    this.selectedLinkId = linkId;
  }


  isClicked(linkId: string) {
    return this.selectedLinkId === linkId;
  }

}
