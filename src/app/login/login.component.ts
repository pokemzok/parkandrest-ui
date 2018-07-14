import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LoginRequest} from './login.request';
import {Auth} from '../auth/auth.interface';
import {AuthorityComponent} from '../auth/authority.component';
import {VALIDATIONS_CONFIG} from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AuthorityComponent {

  loginForm: FormGroup;

  constructor(@Inject('AuthService')private authService: Auth) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, [Validators.required,
        Validators.minLength(VALIDATIONS_CONFIG.MIN_USERNAME_LENGTH),
        Validators.maxLength(VALIDATIONS_CONFIG.MAX_TEXT_INPUT_LENGTH)
      ]),
      'password': new FormControl(null, [Validators.required,
        Validators.minLength(VALIDATIONS_CONFIG.MIN_PASSWORD_LENGTH),
        Validators.maxLength(VALIDATIONS_CONFIG.MAX_TEXT_INPUT_LENGTH)
      ])
    })
  }

  onSubmit() {
    this.authService.authenticate(<LoginRequest>this.loginForm.getRawValue())
  }
}
