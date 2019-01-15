
export class ServerException {

  constructor (private _code: string, private _exceptionObjects: any[], private _exceptionMessage: string) {}

  get code(): string {
    return this._code;
  }

  get exceptionObjects(): any[] {
    return this._exceptionObjects;
  }

  get exceptionMessage(): string {
    return this._exceptionMessage;
  }

}
