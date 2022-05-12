import { Component } from '@angular/core';
import { StepperConfig } from '@vfpricing/shared';

@Component({
  selector: 'vfpricing-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'intelligentpricing';
  selectedStep = 0;
  stepper: StepperConfig[] =  [
    { label: 'Customer info', step: 0, checked: false },
    { label: 'Investment & Connections', step: 1,checked: false },
    { label: 'Configure' , step: 2, checked:false },
    { label: 'Tariff Recommendation', step: 3, checked: false},
  ];

  setStep(item: StepperConfig): void {
    this.selectedStep = item.step;
  }

  moveNext(step: number): void {
    this.selectedStep = step + 1;
    this.stepper[step].checked = true;
  }

  moveBack(step: number): void {
    this.selectedStep = step - 1;
  }
}
