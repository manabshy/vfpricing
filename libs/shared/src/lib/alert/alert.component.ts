import { Component, Input } from '@angular/core';

@Component({
  selector: 'vfpricing-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  @Input() alertType!: 'warning';
  @Input() isVisible!: boolean;
}
