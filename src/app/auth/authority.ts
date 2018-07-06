/**
 * Authorities sorted in order from most important, to least
 * Order is necessary for route selection during login operation
 */
export enum Authority {
  OWNER,
  ADMIN,
  OPERATOR,
  DRIVER
}
