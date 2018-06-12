
export class ReportRequest {

  parkingId = 0; // TODO: use when portal is ready for it, Issue #16 Switch between parking
  reportDate: string;

  constructor(reportDate: string) {
    this.reportDate = reportDate;
  }

}
