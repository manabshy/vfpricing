import { Component, Input } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';

export interface ReportConfig {
  graphData: {
    labels: string[];
    chartData: Partial<ChartConfiguration['data']>;
    options: Partial<ChartConfiguration['options']>;
    chartLegend: boolean;
    chartType: ChartType;
  };
  tableData: {
    column: string[];
    rowData: any[];
  };
}
@Component({
  selector: 'vfpricing-report-layout',
  templateUrl: './report-layout.component.html',
  styleUrls: ['./report-layout.component.scss'],
})
export class ReportLayoutComponent {
  @Input() config!: ReportConfig;
}
