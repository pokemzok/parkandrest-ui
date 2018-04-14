// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false
};
export const PROTOCOL = 'http';
export const HOST = 'localhost';
export const PORT = '8080';
export const BASE_URL = PROTOCOL + '://' + HOST + ':' + PORT;
export const LOGIN = BASE_URL + '/login';
export const HEALTH_CHECK = BASE_URL + '/pulse';
