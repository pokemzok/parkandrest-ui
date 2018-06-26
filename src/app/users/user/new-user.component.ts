import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LabelPosition} from '../../form/LabelPosition';
import {TranslatedOptionFactory} from '../../form/select/options/translated-option.factory';
import {ParkingSpaceStatus} from '../../parkingmeter/parkingspace.status';
import {SelectOption} from '../../form/select/options/select-option';

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

  constructor(private translatedOptionFactory: TranslatedOptionFactory) {
    this.statusesOptions = translatedOptionFactory.optionsOf<string>(
      'options.parkingSpace.',
      Object.keys(ParkingSpaceStatus)
    );
  }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required]),
      'repeatPassword': new FormControl(null, [Validators.required]),
      'isActive': new FormControl(null),
      'authorities': new FormControl(null, [Validators.required]),
    });
  }

}
