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
