
export class ReportRequest {

  parkingId: number; // TODO: use when portal is ready for it, Issue #16 Switch between parking
  reportDate: string;

  constructor(reportDate: string) {
    this.reportDate = reportDate;
  }

  constructor(parkingId: number, reportDate: string) {
    this.parkingId = parkingId;
    this.reportDate = reportDate;
  }
}
