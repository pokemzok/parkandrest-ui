import {Injectable} from '@angular/core';
import {FinancialReport} from './financialreport.interface';
import {FinancialReportRequest} from './financialreport.request';
import {FinancialReportResponse} from './financialreport.response';

@Injectable()
export class MockFinancialReportService implements FinancialReport {

  get(request: FinancialReportRequest): FinancialReportResponse {
    return new FinancialReportResponse(
      55.5, 'PLN', 55.5, 'PLN'
    );
  }

}
