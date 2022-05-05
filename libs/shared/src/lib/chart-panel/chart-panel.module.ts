import { NgModule } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ModalModule } from 'ngx-bootstrap/modal';

import { SharedModule } from '../shared.module';
import { ChartPanelComponent } from './chart-panel.component';

@NgModule({
  declarations: [ChartPanelComponent],
  imports: [SharedModule, NgChartsModule, ModalModule.forRoot()],
  exports: [ChartPanelComponent],
})
export class ChartPanelModule {}
