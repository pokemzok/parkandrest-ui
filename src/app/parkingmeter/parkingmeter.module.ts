import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {ParkingMeterComponent} from './parkingmeter.component';
import {FormModule} from '../form/form.module';
import {TranslatedToastrFacade} from '../common/toaster/translated-toaster.service';
import {TranslatedOptionFactory} from '../form/select/options/translated-option.factory';
import {ToastrModule} from 'ngx-toastr';
import {TranslateModule} from '@ngx-translate/core';

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
  ]
})
export class ParkingMeterModule {

}
