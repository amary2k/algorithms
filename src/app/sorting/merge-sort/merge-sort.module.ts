import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MergeSortComponent } from './merge-sort.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [MergeSortComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  exports: [MergeSortComponent],
})
export class MergeSortModule { }
