import {now} from 'moment';

export class AuthToken {

  private readonly givenAt: number;
  private readonly expiresAt: number;

  constructor(
    private token_type: string,
    private access_token: string,
    private expires_in: number,
    private refresh_token: string
  ) {
    this.givenAt = now();
    this.expiresAt = this.givenAt + this.expires_in; // TODO check if it is correct assumption when you decide to use refresh token
  }

    get authorizationHeader(): string {
      return this.token_type + ' ' + this.access_token;
    }

}
