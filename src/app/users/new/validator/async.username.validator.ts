import {UsernameValidator} from './username.validator.interface';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/index';
import {Injectable} from '@angular/core';
import {MockUsernameValidator} from './mock.username.validator';

@Injectable()
export class AsyncUsernameValidator implements UsernameValidator {

  private static readonly ERROR_CODE = 'usernameAlreadyTaken';

  check(control: FormControl): Promise<any> | Observable<any> {
    console.error('Implement me');
    return undefined;
  }
  getErrorCode(): string {
    return AsyncUsernameValidator.ERROR_CODE;
  }
}
