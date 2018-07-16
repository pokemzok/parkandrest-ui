
export class FormErrorPair {
  private _errorCode: string;
  private _translation: string;

  constructor(errorCode: string) {
    this._errorCode = errorCode;
  }

  addTranslation(translation: string) {
    this._translation = translation;
  }

  get errorCode(): string {
    return this._errorCode;
  }

  get translation(): string {
    return this._translation;
  }
}
