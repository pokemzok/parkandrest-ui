import {ReportformModel} from './reportform.model';

export class ReportRequest {

  parkingId = 0; // TODO: use when portal is ready for it, Issue #16 Switch between parking
  reportDate: string;

  constructor(reportformMode: ReportformModel) {
    this.reportDate = reportformMode.reportDate.format('YYYY-MM-DD');
  }

}
