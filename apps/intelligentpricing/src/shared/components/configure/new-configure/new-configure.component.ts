import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'vfpricing-new-configure',
  templateUrl: './new-configure.component.html',
  styleUrls: ['./new-configure.component.scss'],
})
export class NewConfigureComponent {
  currentValue = 0;

  data = [
    {region: 'National', avgCall: 10},
    {region: 'International', avgCall: 30},
    {region: 'Roaming Incoming', avgCall: 50},
    {region: 'Roaming Outgoing', avgCall: 70},
    {region: 'Premuim', avgCall: 90},
  ]

  constructor(private cd: ChangeDetectorRef) {
  }

  updateValue(value:{region: string, avgCall: number}, updatedValue: number): void {
    value.avgCall = updatedValue;
    this.cd.detectChanges();
  }
}
