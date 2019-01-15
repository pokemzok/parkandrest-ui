import {NewUserForm} from './new-user.form';

export class NewUserRequest {

  username: string;
  password: string;
  authorities: string[];
  isActive: boolean;

  static of(form: NewUserForm) {
    return new NewUserRequest(form.username, form.passwords.password, form.authorities, form.isActive);
  }

  private constructor(username: string, password: string, authorities: string[], isActive: boolean) {
    this.username = username;
    this.password = password;
    this.authorities = authorities;
    this.isActive = isActive;
  }

}
