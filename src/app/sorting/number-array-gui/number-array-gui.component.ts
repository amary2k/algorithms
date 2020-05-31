import { Component, Output, EventEmitter } from '@angular/core';
import { AppInjector } from 'src/app/app-injector.service';
import { ArrayUtilService } from '../util/array-util.service';


@Component({
  selector: 'app-number-array-gui',
  templateUrl: './number-array-gui.component.html',
  styleUrls: ['./number-array-gui.component.scss']
})
export class NumberArrayGuiComponent {
  steps = [];
  stylingArray = [];
  numberArray: number[];
  @Output() sort: EventEmitter<any> = new EventEmitter();
  arrayUtilService;

  constructor() {
    const injector = AppInjector.getInjector();    
    this.arrayUtilService = injector.get(ArrayUtilService);
    this.numberArray = this.arrayUtilService.initializeNumberArray(10);
    this.arrayUtilService.shuffleArray(this.numberArray);
    this.steps.push([...this.numberArray]);
  }

  protected swapArrayValuesAndRefresh(arrayToSwap: any[], index1: number, index2: number) {
    this.arrayUtilService.swapArrayValues(arrayToSwap, index1, index2);
    this.steps.push([...arrayToSwap]);
    this.stylingArray.push([index1, index2]);
  }

  // Handle User Inputs
  onArraySizeChange(event) {
    this.numberArray = this.arrayUtilService.initializeNumberArray(event.target.value);
    this.arrayUtilService.shuffleArray(this.numberArray);
    this.steps = [];
    this.stylingArray = [];
    this.steps.push([...this.numberArray]);
  }

  onSort(event) {
    this.sort.emit();
  }
}
