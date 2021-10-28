import { Component } from '@angular/core';
// import { trigger, state, transition, animate, style, keyframes, query, stagger } from '@angular/animations';
import { Sorting } from '../sorting';
import { NumberArrayGuiComponent } from '../number-array-gui/number-array-gui.component';

@Component({
  selector: 'app-merge-sort',
  templateUrl: '../number-array-gui/number-array-gui.component.html',
  styleUrls: ['../number-array-gui/number-array-gui.component.scss'],
  animations: NumberArrayGuiComponent.animations,
})
export class MergeSortComponent extends NumberArrayGuiComponent implements Sorting {

  constructor() {
    super('Merge Sort', 10);
  }

  // Main logic
  sortArray(arrayToSort: number[]) { // Merge Sort
    // Divide, Conquer and Combine
    
    this.mergeSort(arrayToSort, 0 ,arrayToSort.length-1);
    this.steps.push([...arrayToSort]);
  }

  mergeSort(arrayToSort:number[], startIndex:number, endIndex:number){
    // Step 1 Divide array to two problems if not solvable
    if(startIndex < endIndex) { // if array has less than one element return array else proceed
    let midIndex = Math.ceil((startIndex + endIndex)/2); // 3/2 = 2
    this.mergeSort(arrayToSort, startIndex, midIndex);
    this.mergeSort(arrayToSort, midIndex+1, endIndex);
    this.merge(arrayToSort, startIndex, midIndex, endIndex);
    }
  }

  // mergeArray(array1, array2) {
  //   let newArray = [];
  //   for(let i=0; i<array1.length; i++){

  //   }
  // }
  merge(arrayToSort, startIndex:number, midIndex:number, endIndex:number){

    let leftArray = [];
    let rightArray = [];

    /*Copy data to temp arrays*/
    for (let i = 0; i <= (midIndex - startIndex); ++i) {
      leftArray.push(arrayToSort[startIndex + i]); 
    }
    for (let j = 0; j <= (endIndex-midIndex); ++j) {
      rightArray.push(arrayToSort[midIndex + 1 + j]); 
    }

    // Initial indexes of first and second subarrays 
    let i = 0, j = 0; 
  
    // Initial index of merged subarry array 
    let k = startIndex; 
    while (i < leftArray.length && j < rightArray.length) { 
        if (leftArray[i] <= rightArray[j]) { 
          arrayToSort[k] = leftArray[i]; 
            i++; 
        } 
        else { 
          arrayToSort[k] = rightArray[j]; 
            j++; 
        } 
        k++; 
    } 

    /* Copy remaining elements of L[] if any */
    while (i < leftArray.length) { 
        arrayToSort[k] = leftArray[i]; 
        i++; 
        k++; 
    } 

    /* Copy remaining elements of R[] if any */
    while (j < rightArray.length) { 
        arrayToSort[k] = rightArray[j]; 
        j++; 
        k++; 
    } 

  }

  divideArray(startIndex, endIndex, arrayToDivide){
    let newArray = [];
    for(let i=startIndex; i<endIndex; i++){
      newArray.push(arrayToDivide[i]);
    }
    return newArray;
  }
}
