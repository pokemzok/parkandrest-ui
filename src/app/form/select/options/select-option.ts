
export class SelectOption {

  private _value: string;
  private _desc: string;


  constructor(value: string) {
    this._value = value;
    this._desc = value;
  }

  addDescription(desc: string) {
    this._desc = desc;
  }

  get desc(): string {
    return this._desc;
  }
  get value(): string {
    return this._value;
  }

}
