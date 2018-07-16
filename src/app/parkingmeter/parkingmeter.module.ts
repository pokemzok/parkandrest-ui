import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {ParkingMeterComponent} from './parkingmeter.component';
import {FormModule} from '../form/form.module';
import {TranslatedToastrFacade} from '../common/toaster/translated-toaster.service';
import {TranslatedOptionFactory} from '../form/select/options/translated-option.factory';
import {ToastrModule} from 'ngx-toastr';
import {TranslateModule} from '@ngx-translate/core';
import {ENVIRONMENT} from '../../environments/environment';
import {Provider} from '@angular/core/src/di/provider';
import {MockParkingSpaceService} from './mock.parkingspace.service';
import {ParkingSpaceService} from './parkingspace.service';

function provideServices(): any[] {
  if (!(ENVIRONMENT.PRODUCTION) && ENVIRONMENT.SERVER_OFFLINE) {
    return provideMockServices();
  } else {
    return provideBackendServices()
  }
}

function provideMockServices(): Provider[] {
  return [
    {provide: 'ParkingSpaceService', useClass: MockParkingSpaceService},
  ]
}

function provideBackendServices(): Provider[] {
  return [
    {provide: 'ParkingSpaceService', useClass: ParkingSpaceService},
  ]
}

@NgModule({
  declarations: [
    ParkingMeterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ToastrModule,
    TranslateModule.forChild(),
    FormModule,
  ],
  providers: [
    TranslatedToastrFacade,
    TranslatedOptionFactory,
  ].concat(provideServices())
})
export class ParkingMeterModule {

}
