import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LabelPosition} from '../form/LabelPosition';
import {ParkingSpaceProvider} from './parkingspace.provider.interface';
import {ParkingSpaceRequest} from './parkingspace.request';
import {ParkingSpaceResponse} from './parkingspace.response';

@Component({
  selector: 'app-parkingmeter',
  templateUrl: './parkingmeter.component.html',
  styleUrls: ['./parkingmeter.component.css']
})
export class ParkingMeterComponent implements OnInit {

  parkingMeterForm: FormGroup;
  labelPosition = LabelPosition.NONE;
  parkingSpaceRecords: ParkingSpaceResponse[];

  // TODO: select parkingSpaceStatus, do not type it as string

  constructor(@Inject('ParkingSpaceService') private parkingSpaceService: ParkingSpaceProvider) {
    this.parkingSpaceRecords = parkingSpaceService.get(ParkingSpaceRequest.empty())
  }

  ngOnInit() {
    this.parkingMeterForm = new FormGroup({
      'parkingSpaceId': new FormControl(null, Validators.maxLength(20)),
      'parkingSpaceStatus': new FormControl(null, Validators.maxLength(10)),
      'registration': new FormControl(null, Validators.maxLength(20))
    })
  }

  onSearch() {
    // Nie castuje dobrze numberow (chyba jest string w parkingSpaceId)
    this.parkingSpaceRecords = this.parkingSpaceService.get(<ParkingSpaceRequest>this.parkingMeterForm.getRawValue());
  }
}
