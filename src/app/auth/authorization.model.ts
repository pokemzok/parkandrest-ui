import {Authority} from './authority';

export class AuthorizationModel {

  constructor (public authorities: Authority[], public authenticationHeader: string ) {}
}
