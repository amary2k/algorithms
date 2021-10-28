import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MortgageCalcComponent } from './mortgage-calc.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MortgageCalcComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MortgageModule { }
