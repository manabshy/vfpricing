import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'vfpricing-configure',
  templateUrl: './configure.component.html',
  styleUrls: ['./configure.component.scss']
})
export class ConfigureComponent implements OnInit {
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [ 180, 480, 770 ],
        
      },
      {
        data: [ 90, 1000, 270, 400 ],
        
      }
    ],
    labels: [ '', '', '', '', '', '', '' ]
  };

  public lineChartOptions: ChartConfiguration['options'] = {}
 

  public lineChartType: ChartType = 'line';
  constructor() { }

  ngOnInit(): void {
  }

}
