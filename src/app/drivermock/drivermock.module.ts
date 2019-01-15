import {NgModule, Provider} from '@angular/core';
import {DrivermockComponent} from './drivermock.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {FormModule} from '../form/form.module';
import {TranslateModule} from '@ngx-translate/core';
import {ParkingmeterManagementComponent} from './parkingmeter-management/parkingmeter-management.component';
import {TimeManagementComponent} from './time-management/time-management.component';
import {ENVIRONMENT} from '../../environments/environment';
import {TimeManagementService} from './time-management/time-management.service';
import {ParkingmeterManagementService} from './parkingmeter-management/parkingmeter-management.service';
import {MockParkingmeterManagementService} from './parkingmeter-management/mock.parkingmeter-management.service';
import {ModalModule} from 'ngx-modal';

function provideServices(): any[] {
  if (!(ENVIRONMENT.PRODUCTION) && ENVIRONMENT.SERVER_OFFLINE) {
    return provideMockServices();
  } else {
    return provideBackendServices()
  }
}

function provideMockServices(): Provider[] {
  return [
    {provide: 'ParkingmeterManagementService', useClass: MockParkingmeterManagementService}
  ]
}

function provideBackendServices(): Provider[] {
  return [
    {provide: 'ParkingmeterManagementService', useClass: ParkingmeterManagementService}
  ]
}

@NgModule({
  declarations: [
    DrivermockComponent,
    ParkingmeterManagementComponent,
    TimeManagementComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormModule,
    TranslateModule.forChild(),
    ModalModule
  ],
  providers: [
    TimeManagementService
  ].concat(provideServices())
})
export class DrivermockModule {

}

