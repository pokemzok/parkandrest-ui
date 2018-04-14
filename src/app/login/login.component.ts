import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../auth/authentication.service';
import {LoginRequest} from './login.request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  readonly minUsernameLength: number = 4; /*TODO: provide with backoffice values */
  readonly minPasswordLength: number = 7;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.minLength(this.minUsernameLength)]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(this.minPasswordLength)])
    })
  }

  onSubmit() {
    this.authService.authenticate(<LoginRequest>this.loginForm.getRawValue())
  }
}
