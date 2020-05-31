import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NumberArrayGuiComponent } from './number-array-gui.component';


@NgModule({
  declarations: [NumberArrayGuiComponent],
  imports: [
    CommonModule
  ],
  exports: [NumberArrayGuiComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class NumberArrayGuiModule { }
