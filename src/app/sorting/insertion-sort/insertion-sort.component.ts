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
    for(let i=1; i < arrayToSort.length; i++) {
      let j = i;
      while(j > 0 && arrayToSort[j-1] > arrayToSort[j]) {
        this.swapArrayValues(arrayToSort, j, j-1);
        j--;
      }
    }
    return new Promise<boolean>((resolve, reject) => { resolve(true)});
  }
}
