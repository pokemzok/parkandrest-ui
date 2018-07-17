import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LabelPosition} from '../form/label-position';
import {ParkingSpaceProvider} from './parkingspace.provider.interface';
import {ParkingSpaceFilter} from './parkingspace.filter';
import {ParkingSpaceResponse} from './parkingspace.response';
import {SelectOption} from '../form/select/options/select-option';
import {TranslatedOptionFactory} from '../form/select/options/translated-option.factory';
import {ParkingSpaceStatus} from './parkingspace.status';
import {AuthorityComponent} from '../security/auth/authority.component';
import {VALIDATIONS_CONFIG} from '../../environments/environment';

@Component({
  selector: 'app-parkingmeter',
  templateUrl: './parkingmeter.component.html',
  styleUrls: ['./parkingmeter.component.css']
})
export class ParkingMeterComponent implements OnInit, AuthorityComponent {

  parkingMeterForm: FormGroup;
  labelPosition = LabelPosition.NONE;
  parkingSpaceRecords: ParkingSpaceResponse[];
  statusesOptions: SelectOption[];

  constructor(@Inject('ParkingSpaceService') private parkingSpaceService: ParkingSpaceProvider, private translatedOptionFactory: TranslatedOptionFactory) {
    this.parkingSpaceRecords = parkingSpaceService.get(ParkingSpaceFilter.empty());

    this.statusesOptions = translatedOptionFactory.optionsOf<string>(
      'options.parkingSpace.',
      Object.keys(ParkingSpaceStatus)
    );
  }

  ngOnInit() {
    this.parkingMeterForm = new FormGroup({
      'parkingSpaceId': new FormControl(null, Validators.maxLength(VALIDATIONS_CONFIG.MAX_ID_LENGTH)),
      'parkingSpaceStatus': new FormControl(null),
      'registration': new FormControl(null, Validators.maxLength(VALIDATIONS_CONFIG.MAX_REGISTRATION_NR_LENGTH))
    })
  }

  onSearch() {
    this.parkingSpaceRecords = this.parkingSpaceService.get(<ParkingSpaceFilter>this.parkingMeterForm.getRawValue());
  }
}
