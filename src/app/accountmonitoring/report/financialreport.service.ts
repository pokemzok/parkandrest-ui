import {Injectable} from '@angular/core';
import {FinancialReport} from './financialreport.interface';
import {FinancialReportRequest} from './financialreport.request';
import {FinancialReportResponse} from './financialreport.response';

@Injectable()
export class FinancialReportService implements FinancialReport {

  get(request: FinancialReportRequest): FinancialReportResponse {
    alert('implement me');
    return null;
  }


}
