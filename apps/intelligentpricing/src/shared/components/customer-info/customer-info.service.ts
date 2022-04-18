import { Injectable } from '@angular/core';
import { ReportConfig, ReportConfigService } from '@vfpricing/shared';

@Injectable()
export class CustomerInfoService {
  mockVoiceTrendData = {
    dataSet: [
      { data: [55, 50, 55, 50, 55, 50, 40], label: 'Voice' },
      { data: [50, 55, 50, 55, 50, 55, 40], label: 'National' },
      { data: [5, 5, 5, 5, 5, 5, 5], label: 'Roming' },
    ],
    labels: {
      x: 'Minutes',
      y: 'Date',
      title: 'Voice Trend',
    },
    isOpen: true,
  };

  mockDataTrendData = {
    dataSet: [
      { data: [123, 50, 55, 50, 25, 50, 40], label: 'Voice' },
      { data: [50, 515, 50, 55, 50, 55, 13], label: 'National' },
      { data: [5, 5, 5, 55, 5, 5, 5], label: 'Roming' },
    ],
    labels: {
      x: 'Date',
      y: 'Mb',
      title: 'Data Trend',
    },
    isOpen: true,
  };

  mockctnTrendData = {
    dataSet: [
      { data: [55, 50, 55, 50, 55, 50, 40], label: 'Voice' },
      { data: [50, 55, 50, 55, 50, 55, 40], label: 'National' },
      { data: [5, 5, 5, 5, 5, 5, 5], label: 'Roming' },
    ],
    labels: {
      x: 'Minutes',
      y: 'Date',
      title: 'CTNs Trend',
    },
    isOpen: true,
  };

  mockSpendTrendData = {
    dataSet: [
      { data: [55, 50, 55, 50, 55, 50, 40], label: 'Voice' },
      { data: [50, 55, 50, 55, 50, 55, 40], label: 'National' },
      { data: [5, 5, 5, 5, 5, 5, 5], label: 'Roming' },
    ],
    labels: {
      x: 'Minutes',
      y: 'Date',
      title: 'Spend Trend',
    },
    isOpen: true,
  };


  constructor(private service: ReportConfigService) {}

  getVoiceTrendData(): ReportConfig {
    return {
      graphData: {
        chartData: {
          datasets: this.mockVoiceTrendData.dataSet,
        },
        chartLegend: true,
        chartType: 'line',
        labels: ['0', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx'],
        options: this.service.setScaleTitles(
          this.mockVoiceTrendData.labels.x,
          this.mockVoiceTrendData.labels.y,
          this.mockVoiceTrendData.labels.title
        ),
      },
      tableData: {
        column: ['region', 'annual avg.', 'last 3 month', 'change (%)'],
        rowData: [
          {
            region: 'National',
            'annual avg.': '200 mins',
            'last 3 month': '400 mins',
            'change (%)': '+ 32%',
            status: 0,
          },
          {
            region: 'Internation',
            'annual avg.': '200 mins',
            'last 3 month': '400 mins',
            'change (%)': '- 32%',
            status: 1,
          },
          {
            region: 'Roaming',
            'annual avg.': '200 mins',
            'last 3 month': '400 mins',
            'change (%)': '+ 32%',
            status: 2,
          },
        ],
      },
    };
  }

  getDataTrend(): ReportConfig {
    return {
      graphData: {
        chartData: {
          datasets: this.mockDataTrendData.dataSet,
        },
        chartLegend: true,
        chartType: 'line',
        labels: ['0', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx'],
        options: this.service.setScaleTitles(
          this.mockDataTrendData.labels.x,
          this.mockDataTrendData.labels.y,
          this.mockDataTrendData.labels.title
        ),
      },
      tableData: {
        column: ['region', 'annual avg.', 'last 3 month', 'change (%)'],
        rowData: [
          {
            region: 'National',
            'annual avg.': '200 mins',
            'last 3 month': '400 mins',
            'change (%)': '+ 32%',
            status: 0,
          },
          {
            region: 'Internation',
            'annual avg.': '200 mins',
            'last 3 month': '400 mins',
            'change (%)': '- 32%',
            status: 1,
          },
          {
            region: 'Roaming',
            'annual avg.': '200 mins',
            'last 3 month': '400 mins',
            'change (%)': '+ 32%',
            status: 2,
          },
        ],
      },
    };
  }

  getctnTrend(): ReportConfig {
    return {
      graphData: {
        chartData: {
          datasets: this.mockctnTrendData.dataSet,
        },
        chartLegend: true,
        chartType: 'line',
        labels: ['0', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx'],
        options: this.service.setScaleTitles(
          this.mockctnTrendData.labels.x,
          this.mockctnTrendData.labels.y,
          this.mockctnTrendData.labels.title
        ),
      },
      tableData: {
        column: ['region', 'annual avg.', 'last 3 month', 'change (%)'],
        rowData: [
          {
            region: 'National',
            'annual avg.': '200 mins',
            'last 3 month': '400 mins',
            'change (%)': '+ 32%',
            status: 0,
          },
          {
            region: 'Internation',
            'annual avg.': '200 mins',
            'last 3 month': '400 mins',
            'change (%)': '- 32%',
            status: 1,
          },
          {
            region: 'Roaming',
            'annual avg.': '200 mins',
            'last 3 month': '400 mins',
            'change (%)': '+ 32%',
            status: 2,
          },
        ],
      },
    };
  }

  getSpendTrend(): ReportConfig {
    return {
      graphData: {
        chartData: {
          datasets: this.mockSpendTrendData.dataSet,
        },
        chartLegend: true,
        chartType: 'line',
        labels: ['0', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx', 'xxx'],
        options: this.service.setScaleTitles(
          this.mockSpendTrendData.labels.x,
          this.mockSpendTrendData.labels.y,
          this.mockSpendTrendData.labels.title
        ),
      },
      tableData: {
        column: ['region', 'annual avg.', 'last 3 month', 'change (%)'],
        rowData: [
          {
            region: 'National',
            'annual avg.': '200 mins',
            'last 3 month': '400 mins',
            'change (%)': '+ 32%',
            status: 0,
          },
          {
            region: 'Internation',
            'annual avg.': '200 mins',
            'last 3 month': '400 mins',
            'change (%)': '- 32%',
            status: 1,
          },
          {
            region: 'Roaming',
            'annual avg.': '200 mins',
            'last 3 month': '400 mins',
            'change (%)': '+ 32%',
            status: 2,
          },
        ],
      },
    };
  }
}
