import { NgModule } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';

import { SharedModule } from '../shared.module';
import { ReportLayoutComponent } from './report-layout.component';

@NgModule({
  declarations: [ReportLayoutComponent],
  imports: [SharedModule, NgChartsModule],
  exports: [ReportLayoutComponent],
})
export class ReportLayoutModule {}
