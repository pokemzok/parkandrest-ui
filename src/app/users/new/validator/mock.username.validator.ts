import {UsernameValidator} from './username.validator.interface';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/index';
import {Injectable} from '@angular/core';
import {MockedUsersCollection} from '../../mocked-users.collection';
import {isNullOrUndefined} from 'util';

@Injectable()
export class MockUsernameValidator implements UsernameValidator {

  private static readonly ERROR_CODE = 'usernameAlreadyTaken';

  check(control: FormControl): Promise<any> | Observable<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        const userInstance = MockedUsersCollection.getByUsername(control.value);
        if ( ! isNullOrUndefined(userInstance) ) {
            const string = MockUsernameValidator.ERROR_CODE;
            resolve({string: true});
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }

  getErrorCode(): string {
    return MockUsernameValidator.ERROR_CODE;
  }

}
