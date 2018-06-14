import {Injectable} from '@angular/core';
import {FinancialReport} from './financialreport.interface';
import {FinancialReportRequest} from './financialreport.request';
import {FinancialReportResponse} from './financialreport.response';

@Injectable()
export class MockFinancialReportService implements FinancialReport {

  private static generateRandomMoneyAmount() {
    return Math.ceil(Math.random() * 10000, ) / 100;
  }

  get(request: FinancialReportRequest): FinancialReportResponse {
    console.log(' I am 100% real service mejt');
    return new FinancialReportResponse(
      MockFinancialReportService.generateRandomMoneyAmount(),
      'PLN',
      MockFinancialReportService.generateRandomMoneyAmount(),
      'PLN'
    );
  }


}
