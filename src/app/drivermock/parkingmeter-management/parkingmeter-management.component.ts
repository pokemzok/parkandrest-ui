import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LabelPosition} from '../../form/label-position';
import {VALIDATIONS_CONFIG} from '../../../environments/environment';
import {ParkingmeterManagementProvider} from './parkingmeter-management.provider';
import {CheckParkingmeterRequest} from './check/check.parkingmeter.request';
import {StartParkingmeterRequest} from './start/start.parkingmeter.request';
import {StopParkingmeterRequest} from './stop/stop.parkingmeter.request';
import {Modal} from 'ngx-modal';
import {StartParkingmeterResponse} from './start/start.parkingmeter.response';
import {StopParkingmeterResponse} from './stop/stop.parkingmeter.response';
import {CheckParkingmeterResponse} from './check/check.parkingmeter.response';
import {TatiffType} from './tatiff.type';

@Component({
  selector: 'app-parkingmeter-management',
  templateUrl: './parkingmeter-management.component.html',
  styleUrls: ['./parkingmeter-management.component.css']
})
export class ParkingmeterManagementComponent implements OnInit {
  parkingSpaceAvailabilityForm: FormGroup;
  parkingmeterStartForm: FormGroup;
  parkingmeterStopForm: FormGroup;
  labelPosition = LabelPosition.LEFT;

  startParkingMeterModalContent: StartParkingmeterResponse;
  stopParkingMeterModalContent: StopParkingmeterResponse;
  checkParkingMeterModalContent: CheckParkingmeterResponse;

  constructor(@Inject('ParkingmeterManagementService') private parkingmeterManagementService: ParkingmeterManagementProvider) {
  }

  ngOnInit() {
    this.parkingSpaceAvailabilityForm = new FormGroup({
      'parkingSpaceId': new FormControl(null, [Validators.maxLength(VALIDATIONS_CONFIG.MAX_ID_LENGTH), Validators.required])
    });
    this.parkingmeterStartForm = new FormGroup({
      'parkingSpaceId': new FormControl(null, [Validators.maxLength(VALIDATIONS_CONFIG.MAX_ID_LENGTH), Validators.required]),
      'registration': new FormControl(null, [Validators.maxLength(VALIDATIONS_CONFIG.MAX_REGISTRATION_NR_LENGTH), Validators.required]),
      'tariffType': new FormControl(null, [
        Validators.pattern(TatiffType.toAllowedValuesRegex()),
        Validators.required
      ])
    });
    this.parkingmeterStopForm = new FormGroup({
      'parkingSpaceId': new FormControl(null, [Validators.maxLength(VALIDATIONS_CONFIG.MAX_ID_LENGTH), Validators.required])
    });
  }

  onAvailabilityCheck(modal: Modal) {
    this.parkingmeterManagementService
      .checkParkingSpace(<CheckParkingmeterRequest>this.parkingSpaceAvailabilityForm.getRawValue())
      .subscribe(response => {
        this.checkParkingMeterModalContent = response;
        modal.open();
      });
  }

  onStart(modal: Modal) {
    this.parkingmeterManagementService
      .start(<StartParkingmeterRequest>this.parkingmeterStartForm.getRawValue())
      .subscribe(response => {
          this.startParkingMeterModalContent = response;
          modal.open();
        }
      );
  }

  onStop(modal: Modal) {
    this.parkingmeterManagementService
      .stop(<StopParkingmeterRequest>this.parkingmeterStopForm.getRawValue())
      .subscribe(response => {
          this.stopParkingMeterModalContent = response;
          modal.open();
        }
      );
  }
}
