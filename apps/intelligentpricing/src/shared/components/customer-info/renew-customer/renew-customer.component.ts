import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Oportunity } from '@vfpricing/vf-enums';

@Component({
  selector: 'vfpricing-renew-customer',
  templateUrl: './renew-customer.component.html',
  styleUrls: ['./renew-customer.component.scss']
})
export class RenewCustomerComponent  {
  oportunityEnum = Oportunity;
  customerForm!: FormGroup;
  selected: any[] = [];
  @Output() emitForm = new EventEmitter();

  multiSelect = [
    { value: 'Loreum 1', checked: false },
    { value: 'Loreum 2', checked: false },
    { value: 'Loreum 3', checked: false },
    { value: 'Loreum 4', checked: false },
  ];

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      customer: new FormControl([], Validators.required)
    });
  }
  
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
