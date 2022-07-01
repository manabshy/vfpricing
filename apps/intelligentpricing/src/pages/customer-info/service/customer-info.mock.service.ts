import { Injectable } from '@angular/core';
import { ICustomerInfo } from '@vfpricing/defination';
import { Customer_Mock_Data } from '@vfpricing/mock-data';
import { ReportConfig, ReportConfigService } from '@vfpricing/shared';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class CustomerInfoMockService {

  constructor(private service: ReportConfigService) {}

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

  getOpcoData(): Observable<string[]> {
    return of(Customer_Mock_Data.Opco);
  }

  getIndustryByOpco(opco: string): Observable<string[]> {
    return of(Customer_Mock_Data.Industries);
  }

  getCustomerDataByOpco(opco: string): Observable<ICustomerInfo[]> {
    return of(Customer_Mock_Data.Customers);
  }

  getVoiceTrendData(): Observable<ReportConfig> {
    return of({
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
    });
  }

  getDataTrend(): Observable<ReportConfig> {
    return of({
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
    });
  }

  getctnTrend(): Observable<ReportConfig> {
    return of({
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
    });
  }

  getSpendTrend(): Observable<ReportConfig> {
    return of({
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
    });
  }
}
