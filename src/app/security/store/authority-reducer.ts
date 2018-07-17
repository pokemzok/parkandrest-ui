import {Authenticate, AUTHENTICATE} from './actions/authenticate';
import {AuthorizationModel} from '../auth/authorization.model';
import {DEAUTHENTICATE} from './actions/deauthenticate';

const initialState = AuthorizationModel.empty();

export function authorityReducer(state = initialState, action: Authenticate) {
  switch (action.type) {
    case AUTHENTICATE:
      return AuthorizationModel.of(action.payload);
    case DEAUTHENTICATE:
      return AuthorizationModel.empty();
    default:
      return state;
  }
}
