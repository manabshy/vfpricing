import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StepperConfig } from './stepper.interface';

@Component({
  selector: 'vfpricing-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent {
  @Input() stepperConfig: StepperConfig[] = [
    { label: 'Customer info' },
    { label: 'Investment & Connections' },
    { label: 'Configure' },
    { label: 'Tariff Recommendation' },
  ];

  @Output() clickEmit = new EventEmitter();

  selectedIndex = 0;

  clicked(item: StepperConfig, index: number): void {
    this.selectedIndex = index;
    this.clickEmit.emit(item);
  }
}
