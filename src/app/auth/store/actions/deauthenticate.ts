import {Action} from '@ngrx/store';


export const DEAUTHENTICATE = 'deauthenticate';

export class Deauthenticate implements Action {

  readonly type: string = DEAUTHENTICATE;

}


