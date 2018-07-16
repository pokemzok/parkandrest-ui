import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LabelPosition} from '../../form/LabelPosition';
import {TranslatedOptionFactory} from '../../form/select/options/translated-option.factory';
import {SelectOption} from '../../form/select/options/select-option';
import {NewUserRequest} from './new-user.request';
import {UserAuthorities} from '../users.authorities';
import {UserManagement} from '../new-user.interface';
import {isNullOrUndefined} from 'util';
import {VALIDATIONS_CONFIG} from '../../../environments/environment';
import {PasswordsValidator} from './validator/passwords.validator';
import {UsernameValidator} from './validator/username.validator.interface';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  registerForm: FormGroup;
  labelPosition = LabelPosition.LEFT;
  statusesOptions: SelectOption[];

  constructor(private translatedOptionFactory: TranslatedOptionFactory,
              private formBuilder: FormBuilder,
              @Inject('UsernameValidator') private asyncUsernameValidator: UsernameValidator,
              @Inject('UserManagementService') private userManagementService: UserManagement) {
    this.statusesOptions = translatedOptionFactory.optionsOf<string>(
      'options.authorities.',
      Object.keys(UserAuthorities)
    );
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: [null, [
        Validators.required,
        Validators.minLength(VALIDATIONS_CONFIG.MIN_USERNAME_LENGTH),
        Validators.maxLength(VALIDATIONS_CONFIG.MAX_TEXT_INPUT_LENGTH)],
        this.asyncUsernameValidator.check.bind(this)
      ],
      passwords: new FormGroup({
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(VALIDATIONS_CONFIG.MIN_PASSWORD_LENGTH),
          Validators.maxLength(VALIDATIONS_CONFIG.MAX_TEXT_INPUT_LENGTH)
        ]),
        repeatPassword: new FormControl(null, [
          Validators.required,
          Validators.minLength(VALIDATIONS_CONFIG.MIN_PASSWORD_LENGTH),
          Validators.maxLength(VALIDATIONS_CONFIG.MAX_TEXT_INPUT_LENGTH)
        ])
      }, {validators: PasswordsValidator.validate.bind(this)}),
      isActive: [false, [Validators.required]],
      authorities: [null, Validators.required] // TODO: multiselect
    });
  }

  isPasswordsFormInvalid(): boolean {
    const passwordsForm = this.registerForm.get('passwords');
    return passwordsForm.invalid && passwordsForm.touched;
  }

  onSubmit() {
    const request = <NewUserRequest>this.registerForm.getRawValue();
    const response = this.userManagementService.add(request);
    if (!isNullOrUndefined(response)) {
      this.registerForm.reset({isActive: false});
    }
  }
}
