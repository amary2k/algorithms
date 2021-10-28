import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InsertionSortComponent } from './insertion-sort.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [InsertionSortComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  exports: [InsertionSortComponent],
})
export class InsertionSortModule { }
