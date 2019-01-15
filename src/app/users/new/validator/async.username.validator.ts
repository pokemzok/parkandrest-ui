import {UsernameValidator} from './username.validator.interface';
import {FormControl} from '@angular/forms';
import {Observable, of} from 'rxjs/index';
import {Injectable} from '@angular/core';
import {SecureHttpService} from '../../../security/http/secure-http.service';
import {SecureRequest} from '../../../security/http/secure-request';
import {USERNAME_VALIDATION_URL} from '../../../../environments/environment';
import {flatMap} from 'rxjs/operators';

@Injectable()
export class AsyncUsernameValidator implements UsernameValidator {

  private static readonly ERROR_CODE = 'usernameAlreadyTaken';

  constructor(private http: SecureHttpService) {
  }


  check(control: FormControl): Promise<any> | Observable<any> {
    return this.http.get(
      new SecureRequest(
        USERNAME_VALIDATION_URL + control.value)
    ).pipe(
      flatMap(response => { // FIXME Issue 41
        if (response.ok) {
          return of(null);
        } else {
          return of({'usernameAlreadyTaken': true});
        }
      })
    );
  }

  getErrorCode(): string {
    return AsyncUsernameValidator.ERROR_CODE;
  }
}
