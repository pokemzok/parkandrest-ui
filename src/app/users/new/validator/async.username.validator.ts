import {UsernameValidator} from './username.validator.interface';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/index';
import {Injectable} from '@angular/core';

@Injectable()
export class AsyncUsernameValidator implements UsernameValidator {

  check(control: FormControl): Promise<any> | Observable<any> {
    console.error('Implement me');
    return undefined;
  }

}
