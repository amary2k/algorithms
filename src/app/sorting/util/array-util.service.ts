import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * @description
 * A common array util service to create/shuffle arrays
 **/
export class ArrayUtilService {

  constructor() { }
  
  /**
   * @description
   * Initialize a number array generated in squence
   **/
  initializeNumberArray (lengthOfArray: number, start: number = 0): number[] {
    let numberArray = [];
    for(let i=start; i < lengthOfArray; i++) {
      numberArray.push(i);
    }
    return numberArray;
  }

  shuffleArray (arrayToShuffle: any[])  {
    for (let i = 0; i < arrayToShuffle.length; i++) {
			let randomIndexToSwap = Math.floor(Math.random() * arrayToShuffle.length);
			const temp = arrayToShuffle[randomIndexToSwap];
			arrayToShuffle[randomIndexToSwap] = arrayToShuffle[i];
			arrayToShuffle[i] = temp;
		}
  }

  swapArrayValues (arrayToSwap:any[], index1:number, index2:number) {
    const temp = arrayToSwap[index2];
    arrayToSwap[index2] = arrayToSwap[index1];
    arrayToSwap[index1] = temp;
    return arrayToSwap;
  }
}
