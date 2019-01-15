import {NewUserRequest} from './new/new-user.request';
import {Injectable} from '@angular/core';
import {UserManagement} from './user-management.interface';
import {NewUserResponse} from './new/new-user.response';
import {SecureHttpService} from '../security/http/secure-http.service';
import {SecureRequest} from '../security/http/secure-request';
import {ACTIVATE_USER_URL, DEACTIVATE_USER_URL, NEW_USER_URL} from '../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {TranslatedToastrFacade} from '../common/toaster/translated-toaster.service';

@Injectable()
export class UserManagementService implements UserManagement {

  constructor(private httpService: SecureHttpService, private toastr: TranslatedToastrFacade) {
  }

  add(request: NewUserRequest): Observable<NewUserResponse> {
    return this.httpService.put(new SecureRequest(NEW_USER_URL, request))
      .pipe(
        map(response => {
            const body = response.body;
            // FIXME serwis, which would check status and show notification if it is 200
            this.toastr.success('notifications.userCreationSuccess');
            return body ? new NewUserResponse(
              body.username,
              body.isActive,
              body.registrationDateTime) : null;
          }
        )
      );
  }

  activate(username: string): Observable<any> {
    return this.httpService.put(new SecureRequest(ACTIVATE_USER_URL, {username: username}));
  }

  deactivate(username: string): Observable<any> {
    return this.httpService.put(new SecureRequest(DEACTIVATE_USER_URL, {username: username}));
  }

}
