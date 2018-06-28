import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LabelPosition} from '../../form/LabelPosition';
import {TranslatedOptionFactory} from '../../form/select/options/translated-option.factory';
import {SelectOption} from '../../form/select/options/select-option';
import {NewUserRequest} from './new-user.request';
import {UserAuthorities} from '../users.authorities';
import {UserManagement} from '../new-user.interface';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  readonly minUsernameLength: number = 4;
  /*TODO: provide with backoffice values */
  readonly minPasswordLength: number = 7;

  registerForm: FormGroup;
  labelPosition = LabelPosition.LEFT;
  statusesOptions: SelectOption[];

  constructor(private translatedOptionFactory: TranslatedOptionFactory,
              private formBuilder: FormBuilder,
              @Inject('UserManagementService')  private userManagementService: UserManagement ) {
    this.statusesOptions = translatedOptionFactory.optionsOf<string>(
      'options.authorities.',
      Object.keys(UserAuthorities)
    );
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: [null, [Validators.required, Validators.minLength(this.minUsernameLength)]],
      password: [null, [Validators.required, Validators.minLength(this.minPasswordLength)]],
      // TODO: custom validator to check weather first password = second password
      repeatPassword: [null, [Validators.required, Validators.minLength(this.minPasswordLength)]],
      isActive: null, // TODO: boolean value
      authorities: [null, Validators.required] // TODO: multiselect
    });
  }

  onSubmit() {
   const request =  <NewUserRequest>this.registerForm.getRawValue();
   request.isActive = true; // FIXME: jest to obejscie
   this.userManagementService.add(request);
  }

}
