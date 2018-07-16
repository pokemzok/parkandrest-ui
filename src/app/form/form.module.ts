import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {DateAdapter, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import {MatMomentDateModule, MomentDateAdapter} from '@angular/material-moment-adapter';
import {MomentModule} from 'ngx-moment';
import {DatepickerComponent} from './datepicker/datepicker.component';
import {FormInputComponent} from './input/form-input.component';
import {FormReadonlyComponent} from './readonly/form-readonly.component';
import {FormSelectComponent} from './select/select/form-select.component';
import {FormSubmitComponent} from './submit/form-submit.component';

@NgModule({
  declarations: [
    DatepickerComponent,
    FormInputComponent,
    FormReadonlyComponent,
    FormSelectComponent,
    FormSubmitComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule,
    MomentModule
  ],
  providers : [
    {provide: DateAdapter, useClass: MomentDateAdapter}
  ],
  exports: [
    DatepickerComponent,
    FormInputComponent,
    FormReadonlyComponent,
    FormSelectComponent,
    FormSubmitComponent
  ]
})
export class FormModule {

}
