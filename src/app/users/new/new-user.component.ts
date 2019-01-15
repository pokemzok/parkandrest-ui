import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LabelPosition} from '../../form/label-position';
import {TranslatedOptionFactory} from '../../form/select/options/translated-option.factory';
import {SelectOption} from '../../form/select/options/select-option';
import {NewUserRequest} from './new-user.request';
import {UserAuthorities} from '../users.authorities';
import {UserManagement} from '../user-management.interface';
import {isNullOrUndefined} from 'util';
import {VALIDATIONS_CONFIG} from '../../../environments/environment';
import {PasswordsValidator} from './validator/passwords.validator';
import {UsernameValidator} from './validator/username.validator.interface';
import {FormErrorPair} from '../../form/input/form-error.pair';
import {TranslateService} from '@ngx-translate/core';
import {NewUserForm} from './new-user.form';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  registerForm: FormGroup;
  labelPosition = LabelPosition.LEFT;
  statusesOptions: SelectOption[];
  authoritiesForm = new FormControl([], [Validators.required]);

  constructor(private translatedOptionFactory: TranslatedOptionFactory,
              private formBuilder: FormBuilder,
              private translateService: TranslateService,
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
        this.isUsernameAlreadyTaken.bind(this)
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
      authorities: this.authoritiesForm
    });
  }

  isUsernameAlreadyTaken(control: FormControl) { // direct service bind does not work
    return this.asyncUsernameValidator.check(control);
  }

  isPasswordsFormInvalid(): boolean {
    const passwordsForm = this.registerForm.get('passwords');
    return passwordsForm.invalid && passwordsForm.touched;
  }

  onSubmit() {
    const form = <NewUserForm>this.registerForm.getRawValue();
    this.userManagementService.add(NewUserRequest.of(form)).subscribe( response => {
      if (!isNullOrUndefined(response)) {
        this.registerForm.reset({isActive: false});
      }
    });

  }

  getUsernameErrorPairs(): FormErrorPair[] {
    const usernameAlreadyTaken = new FormErrorPair(this.asyncUsernameValidator.getErrorCode());
    const required = new FormErrorPair('required');
    const minLength = new FormErrorPair('minlength');
    const maxLength = new FormErrorPair('maxlength');
    this.translateService.get('forms.validation.usernameAlreadyTaken').subscribe((translation: string) => {
      usernameAlreadyTaken.addTranslation(translation);
    });
    this.translateService.get('forms.validation.required').subscribe((translation: string) => {
      required.addTranslation(translation);
    });
    this.translateService.get('forms.validation.usernameCharsQuantity').subscribe((translation: string) => {
      minLength.addTranslation(translation);
    });
    this.translateService.get('forms.validation.usernameCharsQuantity').subscribe((translation: string) => {
      maxLength.addTranslation(translation);
    });
    return [usernameAlreadyTaken, required, minLength, maxLength];
  }
}
