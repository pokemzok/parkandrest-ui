import {Injectable} from '@angular/core';
import {FinancialReport} from './financialreport.interface';
import {FinancialReportRequest} from './financialreport.request';
import {FinancialReportResponse} from './financialreport.response';
import {SecureHttpService} from '../../security/http/secure-http.service';
import {SecureRequest} from '../../security/http/secure-request';
import {FINANCIAL_REPORT_URL} from '../../../environments/environment';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class FinancialReportService implements FinancialReport {

  constructor(private httpService: SecureHttpService) {
  }

  get(request: FinancialReportRequest): Observable<FinancialReportResponse> {
    return this.httpService.post(
      new SecureRequest(FINANCIAL_REPORT_URL, request),
    ).pipe(
      map(response => {
        const body = response.body;
        return body ? new FinancialReportResponse(
          body.content.chargesSum,
          body.content.chargesCurrency,
          body.content.paymentsSum,
          body.content.paymentsCurrency) : null;
      })
    );
  }

}
