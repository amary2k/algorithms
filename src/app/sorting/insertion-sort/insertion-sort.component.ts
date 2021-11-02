import { Component } from '@angular/core';
// import { trigger, state, transition, animate, style, keyframes, query, stagger } from '@angular/animations';
import { Sorting } from '../sorting';
import { NumberArrayGuiComponent } from '../number-array-gui/number-array-gui.component';
import { ArrayUtilService } from '../util/array-util.service';

@Component({
  selector: 'app-insertion-sort',
  templateUrl: '../number-array-gui/number-array-gui.component.html',
  styleUrls: ['../number-array-gui/number-array-gui.component.scss'],
  animations: NumberArrayGuiComponent.animations,
})
export class InsertionSortComponent extends NumberArrayGuiComponent implements Sorting {

  constructor() {
    super('Insertion Sort', 10, 'n^2');
  }

  // Main logic
  sortArray(arrayToSort: number[]) { // Insertion Sort
    let sorted =  false;
    while(!sorted) { // As long as not sorted keep on looping final iteration will be sorted
      sorted = true;
      for (let i = 0; i < arrayToSort.length; i++) {
        if (arrayToSort[i] > arrayToSort[i + 1]) { // If greater then swap
          this.swapArrayValues(arrayToSort, i, i + 1);
          sorted = false;
        }
      }
    }
    return new Promise<boolean>((resolve, reject) => { resolve(true)});
  }
}
