import {Injectable} from '@angular/core';
import {FinancialReport} from './financialreport.interface';
import {FinancialReportRequest} from './financialreport.request';
import {FinancialReportResponse} from './financialreport.response';

@Injectable()
export class FinancialReportService implements FinancialReport {

  private static generateRandomMoneyAmount() {
    return Math.ceil(Math.random() * 10000, ) / 100;
  }

  // FIXME real implementation for this one!
  get(request: FinancialReportRequest): FinancialReportResponse {
    console.log(' I am 100% real service mejt');
    return new FinancialReportResponse(
      FinancialReportService.generateRandomMoneyAmount(),
      'PLN',
      FinancialReportService.generateRandomMoneyAmount(),
      'PLN'
    );
  }


}
