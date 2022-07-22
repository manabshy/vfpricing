import { Injectable } from '@angular/core';
import { ILabels } from '@vfpricing/defination';
import { ChartOptions } from 'chart.js';

@Injectable({ providedIn: 'root' })
export class ReportConfigService {
  private _chartConfig: ChartOptions = {
    scales: {
      y: {
        title: {
          display: true,
          text: 'Your Title',
          color: '#00000',
          padding: 10,
          font: {
            size: 16,
            weight: '700',
          },
        },
      },
      x: {
        title: {
          display: true,
          text: 'Your Title',
          color: '#00000',
          padding: 10,
          font: {
            size: 16,
            weight: '700',
          },
        },
      },
    },
    plugins: {
      title: {
        display: true,
        text: 'Voice Trends',
        color: '#00000',
        font: {
          size: 24,
          weight: '700',
        },
      },
      legend: {
        position: 'top',
        align: 'start',
        labels: {
          padding: 40,
          usePointStyle: true,
        },
      },
    },
  };

  getScale(): any {
    return this._chartConfig.scales;
  }

  getPlugin(): ChartOptions['plugins'] {
    return this._chartConfig.plugins;
  }

  setScaleTitles(data: ILabels): ChartOptions {
    return {
      scales: {
        y: {
          title: {
            display: true,
            text: data.y,
            color: '#00000',
            padding: 10,
            font: {
              size: 16,
              weight: '700',
            },
          },
        },
        x: {
          title: {
            display: true,
            text: data.x,
            color: '#00000',
            padding: 10,
            font: {
              size: 16,
              weight: '700',
            },
          },
        },
      },
      plugins: {
        title: {
          display: true,
          text: data.title,
          color: '#00000',
          font: {
            size: 24,
            weight: '700',
          },
        },
        legend: {
          position: 'top',
          align: 'start',
          labels: {
            padding: 40,
            usePointStyle: true,
          },
        },
      },
    };
  }
}
