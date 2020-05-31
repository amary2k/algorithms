import { Component } from '@angular/core';
import { trigger, state, transition, animate, style, keyframes, query, stagger } from '@angular/animations';
import { Sorting } from '../sorting';
import { NumberArrayGuiComponent } from '../number-array-gui/number-array-gui.component';
import { ArrayUtilService } from '../util/array-util.service';

@Component({
  selector: 'app-bubble-sort',
  templateUrl: './bubble-sort.component.html',
  styleUrls: ['./bubble-sort.component.scss'],
  //   animations: [
  //     trigger('listAnimation', [
  //       transition('* => *', [ // each time the binding value changes
  //         query(':leave', [
  //           stagger(100, [
  //             animate('2s', style({ opacity: 0 }))
  //           ])
  //         ]),
  //         query(':enter', [
  //           style({ opacity: 0 }),
  //           stagger(100, [
  //             animate('2s', style({ opacity: 1 }))
  //           ])
  //         ])
  //       ])
  //     ])
  // ]
})
export class BubbleSortComponent extends NumberArrayGuiComponent implements Sorting {

  title = 'sorting';

  constructor() {
    super();
  }

  // Main logic
  sortArray(arrayToSort: number[]) { // Bubble Sort
    for (let i = 0; i < arrayToSort.length; i++) {
      for (let j = 0; j < arrayToSort.length; j++) {
        if (arrayToSort[j] > arrayToSort[j + 1]) { // If greater then swap
          this.swapArrayValuesAndRefresh(arrayToSort, j, j + 1);
        }
      }
    }
  }

  onSort() {
    this.sortArray(this.numberArray);
  }
}
