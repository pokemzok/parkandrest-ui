import {ReportformModel} from './reportform.model';
import {DATE_FORMAT} from '../../../environments/environment';

export class FinancialReportRequest {

  parkingId = 0; // TODO: use when portal is ready for it, Issue #16 Switch between parking
  reportDate: string;

  constructor(reportformMode: ReportformModel) {
    this.reportDate = reportformMode.reportDate.format(DATE_FORMAT);
  }

}
