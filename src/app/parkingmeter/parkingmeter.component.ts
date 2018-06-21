import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LabelPosition} from '../form/LabelPosition';
import {ParkingSpaceProvider} from './parkingspace.provider.interface';
import {ParkingSpaceRequest} from './parkingspace.request';
import {ParkingSpaceResponse} from './parkingspace.response';
import {SelectOption} from '../form/select/options/select-option';
import {TranslatedOptionFactory} from '../form/select/options/translated-option.factory';
import {ParkingSpaceStatus} from './parkingspace.status';

@Component({
  selector: 'app-parkingmeter',
  templateUrl: './parkingmeter.component.html',
  styleUrls: ['./parkingmeter.component.css']
})
export class ParkingMeterComponent implements OnInit {

  parkingMeterForm: FormGroup;
  labelPosition = LabelPosition.NONE;
  parkingSpaceRecords: ParkingSpaceResponse[];
  statusesOptions: SelectOption[];

  constructor(@Inject('ParkingSpaceService') private parkingSpaceService: ParkingSpaceProvider, private translatedOptionFactory: TranslatedOptionFactory) {
    this.parkingSpaceRecords = parkingSpaceService.get(ParkingSpaceRequest.empty());

    this.statusesOptions = translatedOptionFactory.optionsOf<string>(
      'options.parkingSpace.',
      Object.keys(ParkingSpaceStatus)
    );
  }

  ngOnInit() {
    this.parkingMeterForm = new FormGroup({
      'parkingSpaceId': new FormControl(null, Validators.maxLength(20)),
      'parkingSpaceStatus': new FormControl(null),
      'registration': new FormControl(null, Validators.maxLength(20))
    })
  }

  onSearch() {
    this.parkingSpaceRecords = this.parkingSpaceService.get(<ParkingSpaceRequest>this.parkingMeterForm.getRawValue());
  }
}
