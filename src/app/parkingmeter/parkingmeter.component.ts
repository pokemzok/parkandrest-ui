import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-parkingmeter',
  templateUrl: './parkingmeter.component.html',
  styleUrls: ['./parkingmeter.component.css']
})
export class ParkingMeterComponent implements OnInit {

  parkingMeterForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.parkingMeterForm = new FormGroup({
      'parkingSpaceId': new FormControl(null),
      'parkingSpaceStatus': new FormControl(null),
      'vehicleRegistrationNr': new FormControl(null),
      'occupiedFrom': new FormControl(null)
    })
  }

  onSubmit() {
    // TODO: implement
  }
}
