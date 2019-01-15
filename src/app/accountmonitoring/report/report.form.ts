import {Moment} from 'moment';

export class ReportForm {

  reportDate: Moment;

  constructor(reportDate: Moment) {
    this.reportDate = reportDate;
  }

}
