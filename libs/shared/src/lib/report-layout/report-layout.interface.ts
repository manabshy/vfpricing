import { ChartConfiguration, ChartType } from 'chart.js';

export interface ReportConfig {
  type: string;
  isOpen: boolean;
  graphData: {
    labels: string[];
    chartData: Partial<ChartConfiguration['data']>;
    options: Partial<ChartConfiguration['options']>;
    chartLegend: boolean;
    chartType: ChartType;
  };
  tableData: {
    column: any[];
    rowData: any[];
  };
}
