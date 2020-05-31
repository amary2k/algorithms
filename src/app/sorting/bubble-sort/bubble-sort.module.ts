import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BubbleSortComponent } from './bubble-sort.component';
import { NumberArrayGuiModule } from '../number-array-gui/number-array-gui.module';

@NgModule({
  declarations: [BubbleSortComponent],
  imports: [
    CommonModule,
    NumberArrayGuiModule
  ],
  exports: [BubbleSortComponent],
})
export class BubbleSortModule { }
