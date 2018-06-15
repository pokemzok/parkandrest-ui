import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LabelPosition} from '../form/LabelPosition';

@Component({
  selector: 'app-parkingmeter',
  templateUrl: './parkingmeter.component.html',
  styleUrls: ['./parkingmeter.component.css']
})
export class ParkingMeterComponent implements OnInit {

  parkingMeterForm: FormGroup;
  labelPosition = LabelPosition.NONE;

  constructor() { }

  ngOnInit() {
    this.parkingMeterForm = new FormGroup({
      'parkingSpaceId': new FormControl(null, Validators.maxLength(20)),
      'parkingSpaceStatus': new FormControl(null, Validators.maxLength(10)),
      'vehicleRegistrationNr': new FormControl(null, Validators.maxLength(20))
    })
  }

  onSubmit() {
    // TODO: implement
  }
}
