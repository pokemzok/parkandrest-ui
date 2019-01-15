/**
 * Authorities sorted in order from most important, to least
 * Order is necessary for route selection during login operation
 */
import * as _ from 'underscore';

export enum Authority {
  OWNER,
  ADMIN,
  OPERATOR,
  DRIVER,
  NO_AUTHORITY
}

export namespace Authority {

  const DELIMITER = ',';

  export function of(authorities: string): Authority[] {
    if (authorities ) {
      return _.map(authorities.split(DELIMITER), authority => {
        return Authority[authority];
      })
    }
    return [Authority.NO_AUTHORITY]

  }

}
