import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {ROUTES_DEFINITIONS} from '../routes-definitions';

@NgModule({
  imports: [
    RouterModule.forChild(ROUTES_DEFINITIONS)
  ],
  exports: [RouterModule]
})
export class ParkingMeterRoutingModule {

}
