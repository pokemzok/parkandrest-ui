import * as _ from 'underscore';

export enum TatiffType {
  VIP = 'VIP',
  REGULAR = 'REGULAR'
}

export namespace TatiffType {

  const REGEX_DELIM = '|';

  export function toAllowedValuesRegex(): string {
    return '^(' + _.reduce(Object.values(TatiffType), (prev, curr) => curr + REGEX_DELIM + prev ) + ')$';
  }

}
