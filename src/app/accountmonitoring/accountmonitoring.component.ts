import {Component, Inject, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FinancialReportRequest} from './financialreport.request';
import {ReportformModel} from './reportform.model';
import {FinancialReportResponse} from './financialreport.response';
import {isNullOrUndefined} from 'util';
import * as _ from 'underscore';
import {FinancialReport} from './financialreport.interface';
import {AuthorityComponent} from '../auth/authority.component';

@Component({
  selector: 'app-accountmonitor',
  templateUrl: './accountmonitoring.component.html',
  styleUrls: ['./accountmonitoring.component.css']
})
export class AccountMonitoringComponent implements OnInit, AuthorityComponent {

  reportForm: FormGroup;
  financialReport: FinancialReportResponse = null;

  constructor(@Inject('FinancialReportService') private financialReportService: FinancialReport) { }

  ngOnInit() {
    this.reportForm = new FormGroup({
      'reportDate': new FormControl(null, [Validators.required])
    })
  }

  onSubmit() {
    const request = new FinancialReportRequest(<ReportformModel>this.reportForm.getRawValue());
    this.financialReport = this.financialReportService.get(request);
  }

  isFinancialReportAvailable(): boolean {
    return !isNullOrUndefined(this.financialReport) && !_.isEmpty(this.financialReport);
  }
}
