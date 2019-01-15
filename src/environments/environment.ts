// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev ENVIRONMENT which uses `ENVIRONMENT.ts`, but if you do
// `ng build --env=prod` then `ENVIRONMENT.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const DATE_FORMAT = 'YYYY-MM-DD';
export const DATETIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';

export const ENVIRONMENT = {
  PRODUCTION: false,
  SERVER_OFFLINE: true
};

export const VALIDATIONS_CONFIG = {
  MIN_USERNAME_LENGTH: 4,
  MIN_PASSWORD_LENGTH: 7,
  MAX_ID_LENGTH: 20,
  MAX_INCREMENTED_HOURS_NUMBER_LENGTH: 2,
  MAX_REGISTRATION_NR_LENGTH: 20,
  MAX_TARIFF_TYPE_LENGTH: 7,
  MAX_TEXT_INPUT_LENGTH: 255
};

export const SECURITY_CONFIG = {
  AUTHORIZATION_HEADER: 'Authorization',
  CLIENT_ID: 'uiClient',
  CLIENT_PASSWORD: 'password'
};

export const FILTER_CONFIG = {
  DEFAULT_PAGE_SIZE: 1000,
  MEDIUM_PAGE_SIZE: 20,
  SMALL_PAGE_SIZE: 10,
  SMALLEST_PAGE_SIZE: 6
};

const PROTOCOL = 'http';
const HOST = 'localhost';

const PARKING_MANAGEMENT_PORT = '8080';
const TIME_MANAGEMENT_PORT = '8081';
const SECURITY_PORT = '8082';

const PARKING_MANAGEMENT_URL = PROTOCOL + '://' + HOST + ':' + PARKING_MANAGEMENT_PORT + '/parkingmanagement';
const TIME_MANAGEMENT_URL = PROTOCOL + '://' + HOST + ':' + TIME_MANAGEMENT_PORT + '/timemanagement';
const SECURITY_URL = PROTOCOL + '://' + HOST + ':' + SECURITY_PORT + '/security';

export const GET_PARKING_SPACES_URL = PARKING_MANAGEMENT_URL + '/parkingmeter/parkingSpaces';
export const START_PARKINGMETER_URL = PARKING_MANAGEMENT_URL + '/parkingmeter/start';
export const STOP_PARKINGMETER_URL = PARKING_MANAGEMENT_URL + '/parkingmeter/stop';
export const CHECK_PARKING_SPACE_URL = PARKING_MANAGEMENT_URL + '/parkingmeter/checkParkingSpace';
export const FINANCIAL_REPORT_URL =  PARKING_MANAGEMENT_URL + '/account/monitor/financialReport';

export const CHANGE_TIME_URL = TIME_MANAGEMENT_URL + '/time/increment';
export const RESTORE_TIME_URL = TIME_MANAGEMENT_URL + '/time/restore';

export const LOGIN_URL = SECURITY_URL + '/oauth/token';
export const LOGOUT_URL = SECURITY_URL + '/revoke/token';
export const NEW_USER_URL = SECURITY_URL + '/user/sign-up';
export const ACTIVATE_USER_URL = SECURITY_URL + '/user/activate';
export const DEACTIVATE_USER_URL = SECURITY_URL + '/user/deactivate';
export const USERNAME_VALIDATION_URL = SECURITY_URL + '/user/exist/';
export const GET_USERS_URL = SECURITY_URL + '/users';
