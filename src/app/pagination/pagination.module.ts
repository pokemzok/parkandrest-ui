import {NgModule} from '@angular/core';
import {PaginationComponent} from './pagination.component';
import {CommonsModule} from '../common/commons.module';

@NgModule({
  declarations: [
    PaginationComponent
  ],
  imports: [
    CommonsModule
  ],
  providers: [],
  exports: [
    PaginationComponent
  ]
})
export class PaginationModule {

}
