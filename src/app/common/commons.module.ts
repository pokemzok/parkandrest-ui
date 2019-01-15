import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoopIteratorPipe} from './pipe/loop.iterator.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    LoopIteratorPipe
  ],
  exports: [
    CommonModule,
    LoopIteratorPipe
  ]
})
export class CommonsModule {

}
