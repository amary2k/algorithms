import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertionSortComponent } from './insertion-sort.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TableModule } from '../number-array-gui/table/table.module';


@NgModule({
  declarations: [InsertionSortComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    TableModule
  ],
  exports: [InsertionSortComponent],
})
export class InsertionSortModule { }
