import { Component, EventEmitter, Input, Output } from '@angular/core';
import { StepperConfig } from './stepper.interface';

@Component({
  selector: 'vfpricing-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
})
export class StepperComponent {
  @Input() stepperConfig!: StepperConfig[];
  @Input() selectedIndex = 0;
  
  @Output() clickEmit = new EventEmitter<any>();

  clicked(item: StepperConfig, index: number): void {
    this.selectedIndex = index;
    this.clickEmit.emit(item);
  }
}
