
export class NewUserResponse {
  username: string;
  isActive: boolean;
  registrationDateTime: string;

  constructor(username: string, isActive: boolean, registrationDateTime: string) {
    this.username = username;
    this.isActive = isActive;
    this.registrationDateTime = registrationDateTime;
  }
}
