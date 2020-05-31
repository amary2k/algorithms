import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  numberArray: number[];
  title = 'sorting';
  steps = [];
  stylingArray = [];

  @Input() arraySize: number;

  ngOnInit(size: number = 10): void {
    this.numberArray = [];
    this.steps = [];
    this.stylingArray = [];
    this.numberArray = this.initializeNumberArray(size);
    this.shuffleArray(this.numberArray);
    this.steps.push([...this.numberArray]);
  }

  onArraySizeChange(event) {
    this.ngOnInit(event.target.value);
  }

  shuffleArray (arrayToShuffle: any[])  {
    for (let i = 0; i < arrayToShuffle.length; i++) {
			let randomIndexToSwap = Math.floor(Math.random() * arrayToShuffle.length);
			const temp = arrayToShuffle[randomIndexToSwap];
			arrayToShuffle[randomIndexToSwap] = arrayToShuffle[i];
			arrayToShuffle[i] = temp;
		}
  }

  initializeNumberArray (lengthOfArray: number, start: number = 0): number[] {
    let numberArray = [];
    for(let i=start; i < lengthOfArray; i++) {
      numberArray.push(i);
    }
    return numberArray;
  }

  sortArray (arrayToSort:number[]) {
    // Bubble Sort
    for (let i = 0; i < arrayToSort.length; i++) {
      for (let j = 0; j < arrayToSort.length; j++) {
        if(arrayToSort[j] > arrayToSort[j+1]) { // If greater then swap
          this.swapArrayValuesAndRefresh(arrayToSort,j,j+1);
        }
      }
    }
  }

  swapArrayValues (arrayToSwap:any[], index1:number, index2:number) {
    const temp = arrayToSwap[index2];
    arrayToSwap[index2] = arrayToSwap[index1];
    arrayToSwap[index1] = temp;
    return arrayToSwap;
  }

  swapArrayValuesAndRefresh (arrayToSwap:any[], index1:number, index2:number) {
    this.swapArrayValues(arrayToSwap , index1 , index2 );
    this.steps.push([...arrayToSwap]);
    this.stylingArray.push([index1,index2]);
  }

  onSort() {
    this.sortArray(this.numberArray);
  }
}
