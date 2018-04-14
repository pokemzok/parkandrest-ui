export class LoginRequest {

  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }

  equals(loginRequest: LoginRequest): boolean {
    return loginRequest.username === this.username && loginRequest.password === this.password;
  }
}
