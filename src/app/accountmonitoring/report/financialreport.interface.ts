import {FinancialReportRequest} from './financialreport.request';
import {FinancialReportResponse} from './financialreport.response';
import {Observable} from 'rxjs';


export interface FinancialReport {

  get(request: FinancialReportRequest): Observable<FinancialReportResponse>;
}
