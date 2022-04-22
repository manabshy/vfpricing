import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vfpricing-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss']
})
export class InvestmentComponent implements OnInit {
  
contractLength = [{
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
}
];

selectedContract = '';

  constructor() { }

  ngOnInit(): void {
  }

}
