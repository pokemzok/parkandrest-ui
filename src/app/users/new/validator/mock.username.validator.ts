import {UsernameValidator} from './username.validator.interface';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/index';
import {Injectable} from '@angular/core';
import {MockedUsersCollection} from '../../mocked-users.collection';
import {isNullOrUndefined} from 'util';

@Injectable()
export class MockUsernameValidator implements UsernameValidator {

  check(control: FormControl): Promise<any> | Observable<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        const userInstance = MockedUsersCollection.getByUsername(control.value);
        if ( ! isNullOrUndefined(userInstance) ) {
            resolve({'usernameAlreadyTaken': true});
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }

}
