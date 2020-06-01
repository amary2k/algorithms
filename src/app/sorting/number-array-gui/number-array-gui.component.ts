import { Component, Output, EventEmitter } from '@angular/core';
import { AppInjector } from 'src/app/app-injector.service';
import { ArrayUtilService } from '../util/array-util.service';


/**
 * GUI variation for sorting numbers
 */
export abstract class NumberArrayGuiComponent {
  protected steps = [];
  protected stylingArray = [];
  protected numberArray: number[];
  isStart = true;
  // @Output() sort: EventEmitter<any> = new EventEmitter();
  arrayUtilService;

  /**
   * GUI variation for sorting numbers
   * @param title title of the document
   * @param initialSize initial size of the array you would like to start with
   */
  constructor(private title: string = 'Sorting', private initialSize = 10) {
    const injector = AppInjector.getInjector();
    this.arrayUtilService = injector.get(ArrayUtilService);
    this.init(this.initialSize);
  }

  private init(size: number = 10) {
    this.steps = [];
    this.stylingArray = [];
    this.numberArray = this.arrayUtilService.initializeNumberArray(size);
    this.arrayUtilService.shuffleArray(this.numberArray);
    this.steps.push([...this.numberArray]);
  }

  /**
   * GUI variation for sorting numbers
   * @param arrayToSwap any array to be swapped
   * @param index1 first index position of the number to be swapped
   * @param index2 second index position of the number to be swapped with
  */
  protected swapArrayValues(arrayToSwap: any[], index1: number, index2: number) {
    this.arrayUtilService.swapArrayValues(arrayToSwap, index1, index2);
    this.steps.push([...arrayToSwap]);
    this.stylingArray.push([index1, index2]);
  }

  // Handle User Inputs
  private onArraySizeChange(event) {
    this.init(event.target.value);
  }

  /**
  * Your main logic to sort goes in here
  */
  abstract sortArray(arrayToSort: any[]);

  /**
  * Handler called when sort button is clicked
  */
  onSort(event) {
    this.sortArray(this.numberArray);
  }
}
