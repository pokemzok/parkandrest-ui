import {isNull, isNullOrUndefined, isUndefined} from 'util';

export class Optional<T> {

  static of<T>(value: T): Optional<T> {
    return new Optional<T>(value)
  }

  private constructor (private value: T) {}

  ifPresent(predicate: (value: T) => void): Optional<T>  {
    if (this.isPresent()) {
      predicate(this.value);
    }
    return this;
  }

  isPresent(): boolean {
    return !(isNullOrUndefined(this.value));
  }

  orElse(predicate: () => void) {
    predicate();
  }

  getOrProvide(predicate: () => T): T {
    if (this.isPresent()) {
      return this.value;
    }
    return predicate();
  }

}

