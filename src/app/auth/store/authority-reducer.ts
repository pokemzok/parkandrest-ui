import {Authenticate, AUTHENTICATE} from './actions/authenticate';
import {AuthorizationModel} from '../authorization.model';
import {DEAUTHENTICATE} from './actions/deauthenticate';

const initialState = AuthorizationModel.empty();

export function authorityReducer(state = initialState, action: Authenticate) {
  switch (action.type) {
    case AUTHENTICATE:
      return AuthorizationModel.of(action.payload);
    case DEAUTHENTICATE:
      return initialState;
    default:
      return state;
  }
}
