import {ReportForm} from './report.form';
import {DATE_FORMAT} from '../../../environments/environment';

export class FinancialReportRequest {

  parkingId = 1; // TODO: use when portal is ready for it, Issue #16 Switch between parking
  reportDate: string;

  constructor(reportformMode: ReportForm) {
    this.reportDate = reportformMode.reportDate.format(DATE_FORMAT);
  }

}
