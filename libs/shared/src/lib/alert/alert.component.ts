import { Component, Input } from '@angular/core';

@Component({
  selector: 'vfpricing-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent {
  @Input() alertType!: 'warning' | 'info' | 'question';
  @Input() isVisible!: boolean;
  @Input() title!: string;
  @Input() clickEnable = true;
  @Input() hasDangerText = false;
}
