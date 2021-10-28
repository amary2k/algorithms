import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { appRoutingModule } from './app.routing';
import { SortingModule } from './sorting/sorting.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { MortgageModule } from './mortgage-calc/mortgage-calc.module';
import { NodeComponent } from './data-structures/node/node.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TreeModule } from './data-structures/tree/tree.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NodeComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    appRoutingModule,
    SortingModule,
    MortgageModule,
    TreeModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
