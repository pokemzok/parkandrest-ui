export const environment = {
  production: true
};
export const PROTOCOL = 'http';
export const HOST = 'localhost';
export const PORT = '8080';
export const BASE_URL = PROTOCOL + '://' + HOST + ':' + 'PORT';
export const LOGIN = BASE_URL + '/login';
export const HEALTH_CHECK = BASE_URL + '/pulse';
