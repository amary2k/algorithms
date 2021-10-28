import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BubbleSortComponent } from './bubble-sort.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [BubbleSortComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
  ],
  exports: [BubbleSortComponent],
})
export class BubbleSortModule { }
