import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './mortgage-calc.component.html',
  styleUrls: ['./mortgage-calc.component.scss']
})
export class MortgageCalcComponent implements OnInit {

  principalAmt = 0;
  interestRate = 0;
  monthlyInterestRate = 0;
  monthlyInterestRateIncrement = 0;
  noOfTermYears = 0;
  noOfMonthlyPayments = 0;
  interestToThePowerOfMonths = 0;
  interestToThePowerOfMonthsLessOne = 0;
  dividedMonthlyInterest = 0;
  monthlyPayment = 0;
  noOfMonthsTerm = 0;
  interestCost = 0;

  constructor() {
    this.principalAmt = 240000;
    this.interestRate =  3.15;
    this.noOfTermYears = 20;
    this.onPrincipalAmtChange();
   }

  ngOnInit() {
  }

  onPrincipalAmtChange() {
    this.monthlyInterestRate = (this.interestRate/100)/12;
    this.monthlyInterestRateIncrement = this.monthlyInterestRate + 1;
    this.noOfMonthlyPayments =  this.noOfTermYears * 12;
    this.interestToThePowerOfMonths = Math.pow(this.monthlyInterestRateIncrement, -(this.noOfMonthlyPayments))
    this.interestToThePowerOfMonthsLessOne = 1 - this.interestToThePowerOfMonths;
    this.dividedMonthlyInterest = this.monthlyInterestRate / this.interestToThePowerOfMonthsLessOne;
    this.monthlyPayment =  this.dividedMonthlyInterest * this.principalAmt;
    this.noOfMonthsTerm = 12 * this.noOfTermYears;
    this.interestCost = (this.noOfMonthsTerm * this.monthlyPayment) - this.principalAmt;
  }

}
