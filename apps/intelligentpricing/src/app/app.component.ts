import { Component } from '@angular/core';

@Component({
  selector: 'vfpricing-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'intelligentpricing';

  stepper =  [
    { label: 'Customer info', step: 0, checked: true },
    { label: 'Investment & Connections', step: 1 },
    { label: 'Configure' , step: 3 },
    { label: 'Tariff Recommendation', step: 4},
  ];
}
