import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SortingService {
  private numberArray: number[] = [];
  constructor() { }

  setNumberArray(numberArray: number[]) {
    this.numberArray = numberArray;
  }

  getNumberArray(): number[] {
    return this.numberArray;
  }
}
