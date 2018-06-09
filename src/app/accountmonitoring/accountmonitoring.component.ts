import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LabelPosition} from '../form/form-input/LabelPosition';

@Component({
  selector: 'app-accountmonitor',
  templateUrl: './accountmonitoring.component.html',
  styleUrls: ['./accountmonitoring.component.css']
})
export class AccountMonitoringComponent implements OnInit {

  reportForm: FormGroup;
  private _labelPosition = LabelPosition.LEFT;

  constructor() { }

  ngOnInit() {
    this.reportForm = new FormGroup({
      'reportDate': new FormControl(null, [Validators.required]) // TODO: create DateValidator
    })
  }

  get labelPosition(): LabelPosition {
    return this._labelPosition;
  }

}
