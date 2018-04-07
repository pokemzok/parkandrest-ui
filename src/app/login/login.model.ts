

export class Login {

  constructor(private _usnername: string, private _password: string) {}

  get usnername(): string {
    return this._usnername;
  }

  get password(): string {
    return this._password;
  }

}
