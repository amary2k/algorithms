import { Component } from '@angular/core';
// import { trigger, state, transition, animate, style, keyframes, query, stagger } from '@angular/animations';
import { Sorting } from '../sorting';
import { NumberArrayGuiComponent } from '../number-array-gui/number-array-gui.component';
import { ArrayUtilService } from '../util/array-util.service';

@Component({
  selector: 'app-selection-sort',
  templateUrl: '../number-array-gui/number-array-gui.component.html',
  styleUrls: ['../number-array-gui/number-array-gui.component.scss'],
  animations: NumberArrayGuiComponent.animations,
})
export class SelectionSortComponent extends NumberArrayGuiComponent implements Sorting {

  constructor() {
    super('Selection Sort', 10, 'n^2');
  }

  // Main logic
  sortArray(arrayToSort: number[]) { // selection Sort
    let sorted =  false;
    // As long as not sorted and more sub arrays coninue sorting
    for (let j = 0; j < arrayToSort.length-1 && !sorted; j++) { 
      sorted = true;
      for (let i = j+1; i < arrayToSort.length; i++) {
        if (arrayToSort[i] < arrayToSort[j]) { // If greater then swap
          this.swapArrayValues(arrayToSort, i, j);
          sorted = false;
        }
      }
    }
    return new Promise<boolean>((resolve, reject) => { resolve(true)});
  }
}
