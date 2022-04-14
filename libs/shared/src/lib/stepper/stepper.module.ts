import { NgModule } from '@angular/core';

import { SharedModule } from '../shared.module';
import { StepperComponent } from './stepper.component';



@NgModule({
  declarations: [StepperComponent],
  imports: [
    SharedModule
  ],
  exports: [StepperComponent]
})
export class StepperModule { }
