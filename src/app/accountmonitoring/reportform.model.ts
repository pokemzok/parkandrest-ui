import {Moment} from 'moment';

export class ReportformModel {

  reportDate: Moment;

  constructor(reportDate: Moment) {
    this.reportDate = reportDate;
  }

}
