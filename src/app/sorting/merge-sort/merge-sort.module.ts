import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MergeSortComponent } from './merge-sort.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TableModule } from '../number-array-gui/table/table.module';

@NgModule({
  declarations: [MergeSortComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    TableModule
  ],
  exports: [MergeSortComponent],
})
export class MergeSortModule { }
