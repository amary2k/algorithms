import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BubbleSortComponent } from './bubble-sort.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { TableModule } from '../number-array-gui/table/table.module';

@NgModule({
  declarations: [BubbleSortComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    TableModule
  ],
  exports: [BubbleSortComponent],
})
export class BubbleSortModule { }
