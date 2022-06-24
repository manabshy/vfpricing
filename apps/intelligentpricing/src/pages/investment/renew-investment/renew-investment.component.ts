import { Component } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'vfpricing-renew-investment',
  templateUrl: './renew-investment.component.html',
  styleUrls: ['./renew-investment.component.scss']
})
export class RenewInvestmentComponent  {

 
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

}
