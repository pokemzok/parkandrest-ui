import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {AccountMonitoringComponent} from './accountmonitoring.component';
import {ENVIRONMENT} from '../../environments/environment';
import {Provider} from '@angular/core/src/di/provider';
import {MockFinancialReportService} from './report/mockfinancialreport.service';
import {FinancialReportService} from './report/financialreport.service';
import {FormModule} from '../form/form.module';
import {TranslateModule} from '@ngx-translate/core';
import {MomentModule} from 'ngx-moment';

function provideServices(): any[] {
  if (!(ENVIRONMENT.PRODUCTION) && ENVIRONMENT.SERVER_OFFLINE) {
    return provideMockServices();
  } else {
    return provideBackendServices()
  }
}

function provideMockServices(): Provider[] {
  return [
    {provide: 'FinancialReportService', useClass: MockFinancialReportService},
  ]
}

function provideBackendServices(): Provider[] {
  return [
    {provide: 'FinancialReportService', useClass: FinancialReportService},
  ]
}

@NgModule({
  declarations: [
    AccountMonitoringComponent
  ],
  imports: [
    CommonModule,
    MomentModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
    FormModule
  ],
  providers: []
    .concat(provideServices()),
})
export class AccountMonitoringModule {

}
