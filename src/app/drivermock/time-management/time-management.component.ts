import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LabelPosition} from '../../form/label-position';
import {VALIDATIONS_CONFIG} from '../../../environments/environment';
import {SystimeChangeRequest} from './systime-change.request';
import {TimeManagementService} from './time-management.service';
import {Modal} from 'ngx-modal';
import {SystimeResponse} from './systime.response';

@Component({
  selector: 'app-time-management',
  templateUrl: './time-management.component.html',
  styleUrls: ['./time-management.component.css']
})
export class TimeManagementComponent implements OnInit {
  timeIncrementationForm: FormGroup;
  labelPosition = LabelPosition.LEFT;
  systime: string;

  constructor(private timeManagementService: TimeManagementService) {
  }

  ngOnInit() {
    this.timeIncrementationForm = new FormGroup({
      'hours': new FormControl(null, [Validators.maxLength(VALIDATIONS_CONFIG.MAX_INCREMENTED_HOURS_NUMBER_LENGTH), Validators.required])
    });
  }

  onIncrementHours(modal: Modal) {
    this.timeManagementService
      .incrementTime(<SystimeChangeRequest>this.timeIncrementationForm.getRawValue())
      .subscribe(result => this.onResult(modal, result));
  }

  resetTime(modal: Modal) {
    this.timeManagementService
      .restoreTime()
      .subscribe(result => this.onResult(modal, result));
  }

  private onResult(modal: Modal, result: SystimeResponse) {
    this.systime = result.systemTime;
    modal.open();
  }

}
