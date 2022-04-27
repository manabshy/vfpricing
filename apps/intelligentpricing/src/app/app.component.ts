import { Component } from '@angular/core';
import { StepperConfig } from '@vfpricing/shared';

@Component({
  selector: 'vfpricing-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'intelligentpricing';
  selectedStep = 2;
  stepper: StepperConfig[] =  [
    { label: 'Customer info', step: 0, checked: true },
    { label: 'Investment & Connections', step: 1 },
    { label: 'Configure' , step: 2 },
    { label: 'Tariff Recommendation', step: 3},
  ];

  setStep(item: StepperConfig): void {
    this.selectedStep = item.step;
  }
}
