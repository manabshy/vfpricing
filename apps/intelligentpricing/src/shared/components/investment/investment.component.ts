import { Component } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'vfpricing-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss'],
})
export class InvestmentComponent {
  contractLength = [
    {
      label: '12 months',
      value: 12,
    },
    {
      label: '11 months',
      value: 11,
    },
    {
      label: '10 months',
      value: 10,
    },
  ];

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [ 180, 480, 770 ],
        label: 'Series C',
        fill: 'origin',
      }
    ],
    labels: [ 'January', 'February', 'March' ]
  };

  public lineChartOptions: ChartConfiguration['options'] = {
  
  };

  public lineChartType: ChartType = 'doughnut';
  selectedContract = '';
}
