import {NgModule} from '@angular/core';
import {DrivermockComponent} from './drivermock.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter} from '@angular/material';

@NgModule({
  declarations: [
    DrivermockComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [
    {provide: DateAdapter, useClass: MomentDateAdapter}
  ]
})
export class DrivermockModule {

}

