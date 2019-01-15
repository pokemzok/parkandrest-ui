
export class UserResponse {

  username: string;
  registrationDateTime: string;
  active: boolean;
  authorities: string[];

  constructor(username: string, registrationDate: string, isActive: boolean, authorities: string[]) {
    this.username = username;
    this.registrationDateTime = registrationDate;
    this.active = isActive;
    this.authorities = authorities;
  }
}
