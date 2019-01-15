import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AuthorizationModel} from '../../security/auth/authorization.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;

  constructor(private authStore: Store<AuthorizationModel>) {
    this.authStore.select('authorization').subscribe(
      authModel => this.username = authModel.username
    );
  }

  ngOnInit() {

  }

}
