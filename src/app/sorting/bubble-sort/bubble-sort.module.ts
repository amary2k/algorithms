import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BubbleSortComponent } from './bubble-sort.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [BubbleSortComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule
  ],
  exports: [BubbleSortComponent],
})
export class BubbleSortModule { }
