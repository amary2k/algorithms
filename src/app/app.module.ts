import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
 

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MortgageCalcComponent } from './mortgage-calc/mortgage-calc.component';
import { appRoutingModule } from './app.routing';
import { BubbleSortModule } from './sorting/bubble-sort/bubble-sort.module';

@NgModule({
  declarations: [
    AppComponent,
    MortgageCalcComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    BubbleSortModule,
    appRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
