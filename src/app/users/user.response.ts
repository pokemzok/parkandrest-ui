
export class UserResponse {

  username: string;
  registrationDate: string;
  isActive: boolean;
  authorities: string[];

  constructor(username: string, registrationDate: string, isActive: boolean, authorities: string[]) {
    this.username = username;
    this.registrationDate = registrationDate;
    this.isActive = isActive;
    this.authorities = authorities;
  }
}
