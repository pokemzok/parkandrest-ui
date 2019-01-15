import {Injectable} from '@angular/core';
import {FinancialReport} from './financialreport.interface';
import {FinancialReportRequest} from './financialreport.request';
import {FinancialReportResponse} from './financialreport.response';
import {Observable, of} from 'rxjs';

@Injectable()
export class MockFinancialReportService implements FinancialReport {

  private static generateRandomMoneyAmount() {
    return Math.ceil(Math.random() * 10000) / 100;
  }

  get(request: FinancialReportRequest): Observable<FinancialReportResponse> {
    return of(
      new FinancialReportResponse(
        MockFinancialReportService.generateRandomMoneyAmount(),
        'PLN',
        MockFinancialReportService.generateRandomMoneyAmount(),
        'PLN'
      )
    )
  }

}
