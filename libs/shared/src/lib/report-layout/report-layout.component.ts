import { Component, Input } from '@angular/core';

import { ReportConfig } from './report-layout.interface';

@Component({
  selector: 'vfpricing-report-layout',
  templateUrl: './report-layout.component.html',
  styleUrls: ['./report-layout.component.scss'],
})
export class ReportLayoutComponent {
  @Input() config!: ReportConfig;
}
