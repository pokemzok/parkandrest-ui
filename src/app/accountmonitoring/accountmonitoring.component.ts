import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ReportRequest} from './report.request';

@Component({
  selector: 'app-accountmonitor',
  templateUrl: './accountmonitoring.component.html',
  styleUrls: ['./accountmonitoring.component.css']
})
export class AccountMonitoringComponent implements OnInit {

  reportForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.reportForm = new FormGroup({
      'reportDate': new FormControl(null, [Validators.required])
    })
  }

  onSubmit() {
    const request = <ReportRequest>this.reportForm.getRawValue();
    console.log(request);
  }
}
