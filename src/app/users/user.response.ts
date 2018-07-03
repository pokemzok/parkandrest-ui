
export class UserResponse {

  username: string;
  registrationDate: string;
  isActive: string;
  authorities: string[];

  constructor(username: string, registrationDate: string, isActive: string, authorities: string[]) {
    this.username = username;
    this.registrationDate = registrationDate;
    this.isActive = isActive;
    this.authorities = authorities;
  }
}
