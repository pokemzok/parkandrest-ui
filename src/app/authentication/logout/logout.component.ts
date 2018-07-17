import {Component, Inject, OnInit} from '@angular/core';
import {Auth} from '../../security/auth/auth.interface';
import {AuthorityComponentInterface} from '../../security/auth/authority-component.interface';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit, AuthorityComponentInterface {

  constructor(@Inject('AuthService')private authService: Auth) { }

  ngOnInit() {
    this.delay(1000).then(() => this.authService.deauthenticate());
  }

   private delay(ms: number): Promise<void> {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
