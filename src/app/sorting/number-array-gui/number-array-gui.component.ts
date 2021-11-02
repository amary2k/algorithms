import { Component, Output, EventEmitter } from '@angular/core';
import { AppInjector } from 'src/app/app-injector.service';
import { ArrayUtilService } from '../util/array-util.service';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { SortingService } from '../sorting.service';


/**
 * GUI variation for sorting numbers
 */
export abstract class NumberArrayGuiComponent {
  protected steps = [];
  protected problem = [];
  private sortedSteps = [];
  protected stylingArray = [];
  private finalStylingArray = [];
  protected numberArray: number[];
  protected inProgress: boolean = false;
  protected sortPromise = null;
  private timeToSort = 'N/A ';
  isStart = true;
  // @Output() sort: EventEmitter<any> = new EventEmitter();
  arrayUtilService;
  sortingService;

  static animations = [
    trigger('fadeIn', [
      // the "in" style determines the "resting" state of the element when it is visible.
      state('in', style({ opacity: 1 })),
      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({ opacity: 0 }),
        animate(600)
      ]),
    ]),
  ];

  /**
   * GUI variation for sorting numbers
   * @param title title of the document
   * @param initialSize initial size of the array you would like to start with
   */
  constructor(private title: string = 'Sorting', private initialSize = 10, private bigOWorstCase: string) {
    const injector = AppInjector.getInjector();
    this.arrayUtilService = injector.get(ArrayUtilService);
    this.sortingService = injector.get(SortingService);
    this.initialSize = this.sortingService.getNumberArray().length == 0 ? this.initialSize : this.sortingService.getNumberArray().length;
    this.init(this.initialSize);
  }

  private init(size: number = 10) {
    this.clearFinalArrays();
    this.problem = [];
    this.steps = [];
    this.stylingArray = [];
    if (this.sortingService.getNumberArray().length != size || this.sortingService.getNumberArray().length == 0) {
      this.numberArray = this.arrayUtilService.initializeNumberArray(size);
      this.arrayUtilService.shuffleArray(this.numberArray);
      this.sortingService.setNumberArray([...this.numberArray]);
    } else {
      this.numberArray = this.sortingService.getNumberArray();
    }
    this.problem.push([...this.numberArray]);
    this.updateFinalArrays();
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
  abstract sortArray(arrayToSort: any[]): Promise<boolean>;

  /**
  * Handler called when sort button is clicked
  */
  onSort(event) {
    this.clearFinalArrays();
    this.inProgress = true;
    let beforeSorting = new Date().getTime();
    console.log('beforeSorting---' + beforeSorting);
    this.sortArray(this.numberArray).then(resolve => {
      console.log('afterSorting---' + new Date().getTime());
      console.log('afterSorting Diff---' + (new Date().getTime() - beforeSorting));
      this.timeToSort = (new Date().getTime() - beforeSorting).toString();
      this.updateFinalArrays();
      this.inProgress = false;
    });


  }
  clearFinalArrays() {
    this.finalStylingArray = [];
    this.sortedSteps = [];
  }
  updateFinalArrays() {
    this.sortedSteps = [...this.steps];
    this.finalStylingArray = [...this.stylingArray];
  }
}
