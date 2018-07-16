import {Observable} from 'rxjs/index';
import {FormControl} from '@angular/forms';

export interface UsernameValidator {
  check(control: FormControl): Promise<any> | Observable<any>;

}

