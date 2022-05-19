import { NgModule } from '@angular/core';

import { SharedModule } from '../shared.module';
import { RagIconDirective } from './rag-icon.directive';
import { RangeSliderComponent } from './range-slider.component';

@NgModule({
  declarations: [RangeSliderComponent, RagIconDirective],
  imports: [SharedModule],
  exports: [RangeSliderComponent, RagIconDirective],
})
export class RangeSliderModule {}
