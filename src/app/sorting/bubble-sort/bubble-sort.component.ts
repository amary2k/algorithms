import { Component } from '@angular/core';
import { trigger, state, transition, animate, style, keyframes, query, stagger } from '@angular/animations';
import { Sorting } from '../sorting';
import { NumberArrayGuiComponent } from '../number-array-gui/number-array-gui.component';
import { ArrayUtilService } from '../util/array-util.service';

@Component({
  selector: 'app-bubble-sort',
  templateUrl: '../number-array-gui/number-array-gui.component.html',
  styleUrls: ['../number-array-gui/number-array-gui.component.scss'],
  animations: [
    trigger('fadeIn', [
      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({opacity: 1})),
      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({opacity: 0}),
        animate(600)
      ]),
    ]),
  ],
})
export class BubbleSortComponent extends NumberArrayGuiComponent implements Sorting {

  constructor() {
    super('Bubble Sort', 10);
  }

  // Main logic
  sortArray(arrayToSort: number[]) { // Bubble Sort
    for (let i = 0; i < arrayToSort.length; i++) {
      for (let j = 0; j < arrayToSort.length; j++) {
        if (arrayToSort[j] > arrayToSort[j + 1]) { // If greater then swap
          this.swapArrayValues(arrayToSort, j, j + 1);
        }
      }
    }
  }
}
