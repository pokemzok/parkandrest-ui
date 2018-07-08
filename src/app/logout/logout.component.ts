import {Component, Inject, OnInit} from '@angular/core';
import {Auth} from '../auth/auth.interface';
import {AuthorityComponent} from '../auth/authority.component';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit, AuthorityComponent {

  constructor(@Inject('AuthService')private authService: Auth) { }

  ngOnInit() {
    this.delay(1000).then(() => this.authService.deauthenticate());
  }

   private delay(ms: number): Promise<void> {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
