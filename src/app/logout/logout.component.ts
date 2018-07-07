import {Component, Inject, OnInit} from '@angular/core';
import {Auth} from '../auth/auth.interface';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(@Inject('AuthService')private authService: Auth) { }

  ngOnInit() {
    this.delay(1000).then(() => this.authService.deauthenticate());
  }

   private delay(ms: number): Promise {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}
