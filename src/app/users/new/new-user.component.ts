import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LabelPosition} from '../../form/LabelPosition';
import {TranslatedOptionFactory} from '../../form/select/options/translated-option.factory';
import {SelectOption} from '../../form/select/options/select-option';
import {NewUserRequest} from './new-user.request';
import {UserAuthorities} from '../users.authorities';
import {UserManagement} from '../new-user.interface';
import {isNullOrUndefined} from 'util';
import {TranslatedToastrFacade} from '../../common/toaster/translated-toaster.service';
import {VALIDATIONS_CONFIG} from '../../../environments/environment';

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
              private toaster: TranslatedToastrFacade,
              private formBuilder: FormBuilder,
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
        Validators.maxLength(VALIDATIONS_CONFIG.MAX_TEXT_INPUT_LENGTH)]
      ],
      password: [null, [
        Validators.required,
        Validators.minLength(VALIDATIONS_CONFIG.MIN_PASSWORD_LENGTH),
        Validators.maxLength(VALIDATIONS_CONFIG.MAX_TEXT_INPUT_LENGTH)]
      ],
      // TODO: custom validator to check weather first password = second password
      repeatPassword: [null, [
        Validators.required,
        Validators.minLength(VALIDATIONS_CONFIG.MIN_PASSWORD_LENGTH),
        Validators.maxLength(VALIDATIONS_CONFIG.MAX_TEXT_INPUT_LENGTH)]
      ],
      isActive: null, // TODO: boolean value
      authorities: [null, Validators.required] // TODO: multiselect
    });
  }

  onSubmit() {
    const request = <NewUserRequest>this.registerForm.getRawValue();
    request.isActive = true; // FIXME: jest to obejscie
    const response = this.userManagementService.add(request);
    if (!isNullOrUndefined(response)) {
      this.toaster.success('notifications.userCreationSuccess');
      this.registerForm.reset();
    }
  }

}
