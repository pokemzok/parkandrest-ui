// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev ENVIRONMENT which uses `ENVIRONMENT.ts`, but if you do
// `ng build --env=prod` then `ENVIRONMENT.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const ENVIRONMENT = {
  PRODUCTION: false,
  SERVER_OFFLINE: true,
  NO_AUTH_MODE: false
};
export const PROTOCOL = 'http';
export const HOST = 'localhost';
export const PORT = '8080';
export const BASE_URL = PROTOCOL + '://' + HOST + ':' + PORT;
export const LOGIN = BASE_URL + '/login';
export const HEALTH_CHECK = BASE_URL + '/pulse';

export const DATE_FORMAT = 'YYYY-MM-DD';
export const DATETIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
