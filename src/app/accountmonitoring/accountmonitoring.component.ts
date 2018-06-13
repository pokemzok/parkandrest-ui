import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FinancialReportRequest} from './financialreport.request';
import {ReportformModel} from './reportform.model';
import {MockFinancialReportService} from './financialreport.service';

@Component({
  selector: 'app-accountmonitor',
  templateUrl: './accountmonitoring.component.html',
  styleUrls: ['./accountmonitoring.component.css']
})
export class AccountMonitoringComponent implements OnInit {

  reportForm: FormGroup;

  constructor(private financialReportService: MockFinancialReportService) { } // FIXME proxy which provide with a choice (Concrete implementation vs Mock)

  ngOnInit() {
    this.reportForm = new FormGroup({
      'reportDate': new FormControl(null, [Validators.required])
    })
  }

  onSubmit() {
    const request = new FinancialReportRequest(<ReportformModel>this.reportForm.getRawValue());
    console.log(this.financialReportService.get(request)); // TODO: show result on the view
  }
}
