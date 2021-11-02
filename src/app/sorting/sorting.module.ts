import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BubbleSortModule } from './bubble-sort/bubble-sort.module';
import { MergeSortModule } from './merge-sort/merge-sort.module';
import { InsertionSortModule } from './insertion-sort/insertion-sort.module';
import { SortingComponent } from './sorting.component';

import { RouterModule } from '@angular/router';
import { BubbleSortComponent } from './bubble-sort/bubble-sort.component';
import { MergeSortComponent } from './merge-sort/merge-sort.component';
import { InsertionSortComponent } from './insertion-sort/insertion-sort.component';
import { SelectionSortModule } from './selection-sort/selection-sort.module';
import { SelectionSortComponent } from './selection-sort/selection-sort.component';

@NgModule({
  declarations: [
    SortingComponent
  ],
  imports: [
    CommonModule,
    BubbleSortModule,
    MergeSortModule,
    SelectionSortModule,
    InsertionSortModule,
    RouterModule.forChild([
      { path: 'bubble-sort', component: BubbleSortComponent },
      { path: 'merge-sort', component: MergeSortComponent },
      { path: 'selection-sort', component: SelectionSortComponent },
      { path: 'insertion-sort', component: InsertionSortComponent },
    ]),
  ]
})
export class SortingModule { }
