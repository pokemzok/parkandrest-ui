import {NgModule} from '@angular/core';
import {DrivermockComponent} from './drivermock.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    DrivermockComponent
  ],
  imports: [
    CommonModule, ReactiveFormsModule
  ]
})
export class DrivermockModule {

}

