import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'vfpricing-tariff-recommendation',
  templateUrl: './tariff-recommendation.component.html',
  styleUrls: ['./tariff-recommendation.component.scss'],
})
export class TariffRecommendationComponent implements OnInit {
  summaryData = [
    {
      type: 'Vocie & Data',
      connectionCount: 1,
      contractLenght: '24 months',
      usage: '24 mins',
      growth: '12 %',
    },
    {
      type: 'Vocie & Data',
      connectionCount: 1,
      contractLenght: '24 months',
      usage: '24 mins',
      growth: '12 %',
    },
    {
      type: 'Vocie & Data',
      connectionCount: 1,
      contractLenght: '24 months',
      usage: '24 mins',
      growth: '12 %',
    },
  ];

  recommendationData = [
    {
      selected: false,
      tariff: 'Loreum ipsum ipsum ipsumipsum ipsum',
      tcv: '$ xxx.x',
      investment: '$ xxx',
      credit: '$ xxx',
      netValue: '0.00%',
      adjust: false,
    },
    {
      selected: false,
      tariff: 'Loreum ipsum ipsum ipsumipsum ipsum',
      tcv: '$ xxx.x',
      investment: '$ xxx',
      credit: '$ xxx',
      netValue: '0.00%',
      adjust: false,
    },
    {
      selected: false,
      tariff: 'Loreum ipsum ipsum ipsumipsum ipsum',
      tcv: '$ xxx.x',
      investment: '$ xxx',
      credit: '$ xxx',
      netValue: '0.00%',
      adjust: false,
    },
    {
      selected: false,
      tariff: 'Loreum ipsum ipsum ipsumipsum ipsum',
      tcv: '$ xxx.x',
      investment: '$ xxx',
      credit: '$ xxx',
      netValue: '0.00%',
      adjust: false,
    },
    {
      selected: false,
      tariff: 'Loreum ipsum ipsum ipsumipsum ipsum',
      tcv: '$ xxx.x',
      investment: '$ xxx',
      credit: '$ xxx',
      netValue: '0.00%',
      adjust: false,
    },
  ];

  @Output() emitPrevious = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  moveBack() {
    this.emitPrevious.emit(3);
  }
}
