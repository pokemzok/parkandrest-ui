import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FinancialReportRequest} from './financialreport.request';
import {ReportformModel} from './reportform.model';
import {MockFinancialReportService} from './financialreport.service';
import {FinancialReportResponse} from './financialreport.response';
import {isNullOrUndefined} from 'util';
import * as _ from 'underscore';

@Component({
  selector: 'app-accountmonitor',
  templateUrl: './accountmonitoring.component.html',
  styleUrls: ['./accountmonitoring.component.css']
})
export class AccountMonitoringComponent implements OnInit {

  reportForm: FormGroup;
  financialReport: FinancialReportResponse = null;

  constructor(private financialReportService: MockFinancialReportService) { } // FIXME proxy which provide with a choice (Concrete implementation vs Mock)

  ngOnInit() {
    this.reportForm = new FormGroup({
      'reportDate': new FormControl(null, [Validators.required])
    })
  }

  onSubmit() {
    const request = new FinancialReportRequest(<ReportformModel>this.reportForm.getRawValue());
    this.financialReport = this.financialReportService.get(request); // TODO: show result on the view
  }

  isFinancialReportAvailable(): boolean {
    return !isNullOrUndefined(this.financialReport) && !_.isEmpty(this.financialReport);
  }
}
