import {FormGroup} from '@angular/forms';
import {ValidationErrors} from '@angular/forms/src/directives/validators';

export class PasswordsValidator {

  static validate(passwordsFormGroup: FormGroup): ValidationErrors {
    if (passwordsFormGroup.touched) {
      const password = passwordsFormGroup.controls.password.value;
      const repeatPassword = passwordsFormGroup.controls.repeatPassword.value;
      if (repeatPassword !== password) {
        return {'passwordMismatch': true};
      }
    }
  }
}
