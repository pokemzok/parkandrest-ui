import {Action} from '@ngrx/store';
import {AuthorizationModel} from '../../auth/authorization.model';


export const AUTHENTICATE = 'authenticate';

export class Authenticate implements Action {

  readonly type: string = AUTHENTICATE;

  constructor(public payload: AuthorizationModel) {};

}


