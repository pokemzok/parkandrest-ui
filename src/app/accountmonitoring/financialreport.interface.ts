import {FinancialReportRequest} from './financialreport.request';
import {FinancialReportResponse} from './financialreport.response';


export interface FinancialReport {

  get(request: FinancialReportRequest): FinancialReportResponse;
}
