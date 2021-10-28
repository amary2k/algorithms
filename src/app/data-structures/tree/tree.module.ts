import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeComponent } from './tree.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    TreeComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ]
})
export class TreeModule { }
