import { Component, EventEmitter, Output } from '@angular/core';
import { Oportunity } from '@vfpricing/vf-enums';

@Component({
  selector: 'vfpricing-renew-customer',
  templateUrl: './renew-customer.component.html',
  styleUrls: ['./renew-customer.component.scss']
})
export class RenewCustomerComponent {
  oportunityEnum = Oportunity;
  selected: any[] = [];
  @Output() emitForm = new EventEmitter();

  multiSelect = [
    { value: 'Loreum 1', checked: false },
    { value: 'Loreum 2', checked: false },
    { value: 'Loreum 3', checked: false },
    { value: 'Loreum 4', checked: false },
  ];

  updateAllComplete(value: any) {
    const hasValue = this.selected.findIndex(
      (item) => item.value === value.value
    );
    if (hasValue >= 0) {
      this.selected.splice(hasValue, 1);
    } else {
      this.selected.push(value);
    }

    this.emitForm.emit(!!this.selected.length);
  }

}
